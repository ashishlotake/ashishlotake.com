export default function SectionContainer({ children }) {
  return (
    <div
      // className="mx-auto min-h-screen max-w-3xl "
      className="sm:px mx-auto max-w-4xl px-5 xl:max-w-5xl xl:px-0"
      // className="mx-auto max-w-4xl px-4 md:px-0 xl:max-w-5xl xl:px-0"
    >
      {children}
    </div>
  )
}
