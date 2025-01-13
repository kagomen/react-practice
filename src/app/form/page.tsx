"use client"

import { useActionState } from "react"
import { action } from "./actions/action"
import Button from "./components/Button"
import Message from "./components/Message"

export default function Form() {
  const [state, formAction] = useActionState(action, {
    status: "idle",
    message: "",
    timeStamp: Date.now(),
  })

  return (
    <form action={formAction}>
      <input name="message" />
      <Button />
      <Message {...state} />
    </form>
  )
}
