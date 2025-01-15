type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  params: Promise<{ slug: string }>
}

// 引数の順番は何でも良い代わりに、名前は一致してないとダメそう
export default async function Page({ searchParams, params }: Props) {
  const { slug } = await params
  const data = await searchParams
  console.log(data)
  return <p>slug:{slug}</p>
}
