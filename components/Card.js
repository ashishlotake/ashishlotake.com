import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import { BsFolder2 } from 'react-icons/bs'
import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full rounded-lg border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition-transform transition duration-500 hover:scale-[1]  hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500 ">
      <div className="px-6 py-2">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <BsFolder2 size={38} />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5 ">
              {href ? <SocialIcon kind="external" href={href} size="10" /> : null}
            </div>
            <div className="mx-1.5 ">
              {github ? <SocialIcon kind="github" href={github} size="10" /> : null}
            </div>
          </div>
        </div>
        <CardTitle>{title}</CardTitle>

        <Subtitle>{description}</Subtitle>
        <div className="flex flex-row justify-between">
          <div className="text-sm text-gray-400">
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
