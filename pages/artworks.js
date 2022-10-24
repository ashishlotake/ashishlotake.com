import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ArtWorkLightBox from '@/components/LightBox'

export default function Journey() {
  return (
    <>
      <PageSEO title={`Artwork by - ${siteMetadata.author}`} description="art by ashish lotake" />

      <ArtWorkLightBox />
    </>
  )
}
