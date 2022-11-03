import { Tag } from '~/components'

export function BlogTags({ tags }: { tags: string[] }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <p key={tag} className=" mr-3 text-primary-500 ">
          #<Tag key={tag} text={tag} />
        </p>
      ))}
    </div>
  )
}
