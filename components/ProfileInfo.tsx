import { siteMetadata } from '~/data'

export function ProfileCardInfo() {
  return (
    <div className="hidden xl :block text-center">
      {/* <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{siteMetadata.author}</h3> */}
      <h5 className="py-2 text-gray-700 dark:text-gray-400">
        {siteMetadata.occupation} <br></br> {siteMetadata.company}
      </h5>
    </div>
  )
}
