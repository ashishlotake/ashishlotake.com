import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
// import CustomLink from './CustomLink'

// const Tag = ({ text }) => {
//   return (
//     <Link href={`/tags/${kebabCase(text)}`}>
//       <p className=" mr-3 rounded-md border border-gray-500 px-1 pt-1 text-sm font-medium uppercase text-gray-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-white dark:hover:text-white">
//         {text.split(' ').join('-')}
//       </p>
//     </Link>
//   )
// }

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a 
      // className="mt-2 mr-3 rounded-lg border hover:border-primary-500 py-1 px-3 text-sm font-medium uppercase transition-transform transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900">
      className="inline-block">
        
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
