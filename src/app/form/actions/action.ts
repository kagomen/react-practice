type ActionState = {
  status: string
  message: string
  timeStamp: number
}

export const action = async (
  _currentState: ActionState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const message = formData.get("message")

  return {
    status: "success",
    message: typeof message === "string" ? message : "",
    timeStamp: Date.now(),
  }
}
