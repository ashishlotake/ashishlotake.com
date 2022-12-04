import type React from 'react'

export function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-3xl xl:px-0">{children}</div>
}
