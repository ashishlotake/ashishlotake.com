import type { Data, Node } from 'unist'

export interface ViewApiResponse {
  data?: {
    total: string
  }
}

export interface SpotifyNowPlayingData {
  isPlaying: boolean
  songUrl?: string
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  className?: string
}

export interface TagsCount {
  [tag: string]: number
}

export interface PaginationType {
  currentPage: number
  totalPages: number
}

export interface UnistTreeType extends Node<Data> {
  children: Node<Data>[]
}
export interface UnistNodeType extends Node<Data> {
  lang?: string
  children: Node<Data>[]
  properties?: { [key: string]: string[] }
  depth?: number
}
export interface UnistImageNode extends UnistNodeType {
  url: string
  alt: string
  name: string
  attributes: unknown[]
}

export interface TOC {
  value: string
  url: string
  depth: number
}

export interface RemarkTocHeadingOptions {
  exportRef: TOC[]
}
