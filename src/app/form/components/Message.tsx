interface MessageProps {
  status: string
  message: string
}

export default function Message({ status, message }: MessageProps) {
  return (
    <div>
      <p>
        {status === "success"
          ? message !== ""
            ? `以下の内容を送信しました：${message}`
            : "入力内容はありません"
          : ""}
      </p>
    </div>
  )
}
