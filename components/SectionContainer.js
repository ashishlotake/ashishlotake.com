export default function SectionContainer({ children }) {
  return (
    <div
      // className="mx-auto min-h-screen max-w-3xl "
      className="sm:px mx-auto max-w-3xl px-5 xl:max-w-4xl xl:px-0"
      // className=""
    >
      {children}
    </div>
  )
}
