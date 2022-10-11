export function PageTitle({ children }) {
  return (
    <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
      {children}
    </h1>
  )
}

export function Subtitle({ children }) {
  return <p className=" text-gray-500">{children}</p>
}

export function CardTitle({ children }) {
  return (
    <h4 className="mb-2 w-full text-xl font-semibold text-gray-900 dark:text-gray-100 md:text-2xl">
      {children}
    </h4>
  )
}

export function PageSubHeading({ children }) {
  return (
    <h2 className="mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
      {children}
    </h2>
  )
}
