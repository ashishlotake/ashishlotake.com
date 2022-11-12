import { Tag } from '~/components'

export function BlogTags({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <p
          key={tag}
          className="text-sm mr-3 text-gray-500 dark:text-gray-400 hover:!text-primary-500 hover:underline "
        >
          #<Tag key={tag} text={tag} />
        </p>
      ))}
    </div>
  )
}
