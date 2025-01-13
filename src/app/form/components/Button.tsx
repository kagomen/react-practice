import { useFormStatus } from "react-dom"

export default function Button() {
  const { pending, data } = useFormStatus()
  console.log(data?.get("message"))
  return (
    <button type="submit" disabled={pending} className="disabled:text-gray-400">
      submit
    </button>
  )
}

// useFormStatus は同じコンポーネントでレンダーされた <form> のステータス情報を返さない
