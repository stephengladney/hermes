import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}
`

export const LoginContainer = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  display: block;
  height: 350px;
  left: calc(50vw - 500px);
  position: absolute;
  text-align: center;
  top: calc(50vh - 175px);
  width: 1000px;
`

export const HeroText = styled.h1`
  font-size: 60px;
`

export const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: normal;
`
