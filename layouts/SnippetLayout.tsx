import { PageTitle, SnippetCard, Subtitle } from '~/components'
import type { SnippetLayoutProps } from '~/types'

export function SnippetLayout({ snippets, description }: SnippetLayoutProps) {
  return (
    <div className="dividey divide-gray-200 dark:divide-gray-700">
      <div className="pt-0 md:pt-6 pb-4">
        <PageTitle>Snippets</PageTitle>
        <Subtitle>{description}</Subtitle>
      </div>
      <div className="container">
        <div className="lg:grid grid-cols-2 gap-4">
          {snippets.map((snippet) => (
            <SnippetCard key={snippet.title} snippet={snippet} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SnippetLayout
