type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  params: Promise<{ slug: string }>
}

// 当たり前だが、引数がオブジェクトの時はプロパティの順は関係ない。keyで参照されるため。
export default async function Page({ searchParams, params }: Props) {
  const { slug } = await params
  const data = await searchParams
  console.log(data)
  return <p>slug:{slug}</p>
}
