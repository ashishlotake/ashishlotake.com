import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import ArtWorkLightBox from '@/components/LightBox'
export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of projects I have built"
      />
      <div className="border-b border-gray-400 dark:border-gray-600">
        <div className="max-w-xl ">
          <PageTitle>Project</PageTitle>
          <Subtitle>{/* A list of projects I have been working on or built */}</Subtitle>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-1 lg:grid-cols-1">
        {projectsData.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={d.href}
            github={d.github}
            tech1={d.tech1}
            tech2={d.tech2}
            tech3={d.tech3}
          />
        ))}
      </div>
    </>
  )
}
