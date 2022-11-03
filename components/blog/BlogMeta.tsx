import type { BlogMetaProps } from '~/types'
import { formatDate } from '~/utils'

export function BlogMeta({ date, slug, readingTime }: BlogMetaProps) {
  return (
    <dd className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center pb-4">
      <time dateTime={date} className="flex items-center justify-center">
        <span className="">{formatDate(date)}</span>
      </time>
      <div className="flex items-center">
        <span className="">{readingTime.text.replace('min', 'mins')}</span>
        <span className="mx-2"></span>
      </div>
    </dd>
  )
}
