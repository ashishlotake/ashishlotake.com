import Link from '@/components/Link'
import { PageTitle, CardTitle, Subtitle } from './PageTitle'

export function Experience({ title, url, company, range, text1 }) {
  return (
    <div key={title}>
      <div className="flex flex-row">
        <h1 className=" text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
          {title}
        </h1>{' '}
        <span className="text-lg text-gray-500 md:text-xl">&nbsp;@&nbsp;</span>{' '}
        <span className="">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className=" font-mono text-sm text-gray-500 ">{range}</div>
        <div className="pt-1">
          <div className="flex flex-row ">
            <div className="text-primary-color-500 dark:text-primary-color-dark-500 mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <Subtitle>{text1}</Subtitle>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Certificate({ title, credential_url, provider }) {
  return (
    <div key={title}>
      <div className="flex flex-row">
        <h1 className=" text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
          {title}
        </h1>{' '}
        <span className="text-lg text-gray-500 md:text-xl">&nbsp;@&nbsp;</span>{' '}
        <span className="">
          <Link href={credential_url} className="company">
            Credential
          </Link>
        </span>
      </div>
      <div>
        <div className=" font-mono text-sm text-gray-500 ">{provider}</div>
      </div>
    </div>
  )
}
