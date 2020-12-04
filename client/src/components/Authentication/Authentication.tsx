import React from "react"
import { Container, MessageText, Petasos } from "./styles"

export function Authentication() {
  return (
    <Container>
      <Petasos />
      <MessageText>Your Slack is now connected.</MessageText>
    </Container>
  )
}
