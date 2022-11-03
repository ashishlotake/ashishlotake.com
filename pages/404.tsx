import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components'

export default function FourZeroFour() {
  return (
    <>
      <picture>
        <Image width={1014} height={503} src="/static/images/404.svg" alt="404 error" />
      </picture>

      <div className="flex flex-col items-center md:mt-2 md:flex-row  md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="justify-between text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="mx-auto max-w-2xl ">
          <div className="md:text-start text-center md:border-l-2 md:px-6">
            <p className="mb-4 text-xl font-bold  leading-normal md:text-2xl">
              Unavailable For Legal Reasons
            </p>
            <p className="mb-4">
              Why show a generic 404 when I can make it sound mysterious? It seems you've found
              something that used to exist, or you spelled something wrong. I'm guessing you spelled
              something wrong. Can you double check that URL?
            </p>
            <p>But don't worry, you can find plenty of other things on our homepage.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid place-items-center">
        <Link href="/">
          <Button className="p-3 text-xl !bg-primary-500 font-bold text-white border-2 border-black dark:border-white ">
            Back to homepage
          </Button>
        </Link>
      </div>
    </>
  )
}
