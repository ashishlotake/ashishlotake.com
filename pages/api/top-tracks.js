/* eslint-disable import/no-anonymous-default-export */
import { getTopTracks } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getTopTracks()

  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    imageUrl: track.album.images[1].url,
    title: track.name,
    previewUrl: track.preview_url,
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracks })
}
