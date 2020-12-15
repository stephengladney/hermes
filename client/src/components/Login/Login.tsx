import React from "react"
import {
  BodyWrapper,
  HeroText,
  LoginContainer,
  StyledButton,
  StyledLink,
  Subtitle,
} from "./styles"
import { useHistory } from "react-router-dom"

export function Login() {
  useHistory().push("/login")
  return (
    <BodyWrapper>
      <LoginContainer>
        <HeroText>This is Hermes:</HeroText>
        <Subtitle>
          <div>Get updates on work</div>
          <div>in-flight via Slack.</div>
        </Subtitle>
        <StyledLink href="https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=2338296191.759603806980">
          <StyledButton>Sign Up with Slack</StyledButton>
        </StyledLink>
      </LoginContainer>
    </BodyWrapper>
  )
}
