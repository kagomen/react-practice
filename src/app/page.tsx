import Link from "next/link"

export default function Home() {
  return (
    <div className="text-center">
      <h1>React19 practice</h1>
      <Link href="/form" className="hover:underline">
        form
      </Link>
    </div>
  )
}
