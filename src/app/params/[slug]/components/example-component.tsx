type Props = {
  params: Promise<{ slug: string }>
}

export async function Component({ params }: Props) {
  await params
  return <p>hello</p>
}
