import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Track from '@/components/Track'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAudio } from 'react-use'

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  // if (!data) {
  //   return null
  // }

  // return data.tracks.map((track, index) => (
  //   <Track ranking={index + 1} key={track.songUrl} {...track} />
  // ))

  const [selected, setselected] = useState(-1)

  return (
    <div className="px-2">
      {data?.tracks.map((track, index) => (
        <TrackSong
          key={track.title}
          selected={selected}
          setselected={setselected}
          track={track}
          index={index}
        />
      ))}
    </div>
  )
}

function Audio({ url, cstate, setState, setselected }) {
  const [audio, state, controls, ref] = useAudio({
    src: url,
    autoPlay: false,
  })

  useEffect(() => {
    if (cstate === 'playing') return
    if (state.duration > 0) setTimeout(() => setState('playing'), 300)
  }, [state])

  useEffect(() => {
    if (ref.current) {
      ref.current.onended = () => {
        setState('default')
        setselected(-1)
      }
    }
  }, [])

  useEffect(() => {
    if (cstate == 'playing') {
      controls.volume(0.3)
      controls.play()
    } else {
      controls.pause()
    }
  }, [cstate])

  return audio
}

function TrackSong({ track, index, setselected, selected }) {
  const [state, setstate] = useState('default')
  function togglePlay() {
    if (state === 'playing') {
      setselected(-1)
    } else {
      setselected(index)
    }
  }
  useEffect(() => {
    if (selected === index) {
      setstate('loading')
    } else {
      setstate('default')
    }
  }, [selected])
  return (
    <div onClick={togglePlay} className="relative flex cursor-pointer items-center gap-4 p-1">
      {state != 'default' && (
        <Audio
          url={track.previewUrl}
          setselected={setselected}
          setState={setstate}
          cstate={state}
        />
      )}
      <AnimatePresence>
        {state != 'default' && (
          <motion.div
            initial={{ width: 0, borderRadius: 0 }}
            animate={{ width: '100%', borderRadius: 9999 }}
            exit={{ width: 0, borderRadius: 0 }}
            transition={{ duration: 1 }}
            className="absolute -left-2 h-full bg-gradient-to-r from-[#1ED760]/50"
          />
        )}
      </AnimatePresence>
      <div className="relative w-10 overflow-hidden rounded-full text-center font-mono text-4xl">
        <motion.div
          animate={{
            opacity: state != 'default' ? 0 : 1,
            scale: state != 'default' ? 0 : 1,
          }}
          className="relative"
          transition={{ duration: 0.6 }}
        >
          <img className="h-full w-full rounded-lg object-cover" src={track.imageUrl} />
          {/* {index + 1} */}
        </motion.div>
        <AnimatePresence>
          {state == 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 h-full w-full rounded-full"
            >
              <motion.div
                className="absolute h-full w-full rounded-full border-4"
                animate={{
                  borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.4)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0)',
                  ],
                  scale: [0.1, 0.3, 0.5, 0.7, 0.9],
                }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              />
              <motion.div
                className="absolute h-full w-full rounded-full border-4"
                animate={{
                  borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.4)',
                    'rgba(255, 255, 255, 0.2)',
                    'rgba(255, 255, 255, 0)',
                  ],
                  scale: [0.1, 0.3, 0.5, 0.7, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  delay: 0.5,
                  duration: 1,
                  ease: 'linear',
                }}
              />
            </motion.div>
          )}
          {state == 'playing' && (
            <motion.div
              key="img"
              className="absolute top-0 left-0 h-full w-full rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1.3 }}
            >
              <motion.img
                className="h-full w-full rounded-full "
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                src={track.imageUrl}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative flex-1 truncate">
        <a
          rel="noopener noreferrer"
          href={track.songUrl}
          target="_blank"
          className="text-lg font-bold"
        >
          <span className="font-medium text-gray-500">{index + 1} -</span> {track.title}
        </a>
        <p className="text-subtle">{track.artist}</p>
      </div>
    </div>
  )
}
