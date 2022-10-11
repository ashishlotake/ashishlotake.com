import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of projects I have built"
      />
      <div className="border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-xl ">
          <PageTitle>Project</PageTitle>
          <Subtitle>{/* A list of projects I have been working on or built */}</Subtitle>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2 lg:grid-cols-2">
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
