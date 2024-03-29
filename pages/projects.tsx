import { PageSeo } from 'components/SEO'
import { PageTitle, ProjectCard, Subtitle, ProjectCard01 } from '~/components'
import { projectsData, siteMetadata } from '~/data'

export default function Projects() {
  // let workProjects = projectsData.filter(({ type }) => type === 'work')
  // let sideProjects = projectsData.filter(({ type }) => type === 'self')
  let description = 'Projects and stuff that I built.'

  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={description} />
      <div className="dividey divide-gray-200 dark:divide-gray-700">
        <div className="pt-3 md:pt-6 pb-4">
          <PageTitle>Projects</PageTitle>
          <Subtitle>{description}</Subtitle>
        </div>
        {/* <div className="">
          <div className="  grid gap-4 sm:grid-cols-2 md:grid-cols-1  ">
            {projectsData.map((project) => (
              <ProjectCard01 key={project.title} project={project} />
            ))}
          </div>
        </div> */}
        <div className="">
          <div className="  grid gap-4 sm:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
