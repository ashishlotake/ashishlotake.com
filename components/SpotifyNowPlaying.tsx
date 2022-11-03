import type { SpotifyNowPlayingData } from '~/types'
import clsx from 'clsx'

export function SpotifyNowPlaying({ className, songUrl, title, artist }: SpotifyNowPlayingData) {
  return (
    <div className={clsx('flex items-center px-3 xl:px-6 py-2 ', className)}>
      <svg
        className="w-5.5 h-5.5 flex-shrink-0 text-spotify"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
        />
      </svg>
      <div className="ml-2 inline-flex truncate">
        {songUrl ? (
          <>
            <div className="h-5 flex items-end mr-2 pt-1 pb-0.5">
              <div className="bg-spotify w-0.5 h-full animate-music-bar-1"></div>
              <div className="bg-spotify mx-0.5 w-0.5 h-1/2 animate-music-bar-2"></div>
              <div className="bg-spotify w-0.5 h-full animate-music-bar-3"></div>
              <div className="bg-spotify mx-0.5 w-0.5 h-1/2 animate-music-bar-4"></div>
            </div>
            <a
              className=" font-medium"
              href={songUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${title} - ${artist || 'Spotify'}`}
            >
              {title}
            </a>
          </>
        ) : (
          <p className=" font-medium">Not Playing</p>
        )}
        <span className="mx-2 ">{' – '}</span>
        <p className=" max-w-max truncate">{artist || 'Spotify'}</p>
      </div>
    </div>
  )
}
