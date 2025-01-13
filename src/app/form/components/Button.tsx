import { useFormStatus } from "react-dom"

export default function Button() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="disabled:text-gray-400">
      submit
    </button>
  )
}
