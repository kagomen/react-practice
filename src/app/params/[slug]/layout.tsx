import { Component } from "./components/example-component"

type Props = {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export default async function Layout({ params, children }: Props) {
  return (
    <>
      <Component params={params} />
      {children}
    </>
  )
}
