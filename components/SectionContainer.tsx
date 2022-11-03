import type React from 'react'

export function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl px-5 sm:px-0 mx-auto sm:px6 xl:max-w-3xl">{children}</div>
}
