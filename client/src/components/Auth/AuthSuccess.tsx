import React from "react"
import { useSearchParam } from "react-use"

export function AuthSuccess({}) {
  const slackCode = useSearchParam("code")
  return <h1>{slackCode}</h1>
}
