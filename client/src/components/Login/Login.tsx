import React from "react"
import { HeroText, LoginContainer, Subtitle } from "./styles"
import { useHistory } from "react-router-dom"

export function Login() {
  const history = useHistory()
  history.push("/login")
  return (
    <LoginContainer>
      <HeroText>Say hello to Hermes.</HeroText>
      <Subtitle>
        A Slack bot that integrates with Jira and Github to provide your team
        with updates on in-flight work.
      </Subtitle>
      <a href="https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=2338296191.759603806980">
        <img src="https://api.slack.com/img/sign_in_with_slack.png" />
      </a>
    </LoginContainer>
  )
}
