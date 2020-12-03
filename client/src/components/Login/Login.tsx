import React from "react"
import { HeroText, LoginContainer, Subtitle } from "./styles"

export function Login() {
  return (
    <LoginContainer>
      <HeroText>Say hello to Hermes.</HeroText>
      <Subtitle>
        A Slack bot that integrates with Jira and Github to provide your team
        with updates on in-flight work.
      </Subtitle>
      <button>Sign up with Slack</button>
    </LoginContainer>
  )
}
