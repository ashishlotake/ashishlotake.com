export function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-bold tracking-tight  md:text-4xl text-gray-800 dark:text-gray-100  ">
      {children}
    </h1>
  )
}

export function Subtitle({ children }) {
  return <p className="w-full text-gray-500 dark:text-gray-400">{children}</p>
}
