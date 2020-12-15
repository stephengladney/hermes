import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1}
`

export const BodyWrapper = styled.div`
  background: linear-gradient(248.43deg, #330062 0%, #110017 99.47%), #240030;
  height: 100vh;
  width: 100vw;
`
export const LoginContainer = styled.div`
  align-items: center;
  animation: ${fadeIn} 1.5s ease-in-out;
  display: flex;
  flex-direction: column;
  left: calc(50vw - 500px);
  position: absolute;
  top: calc(50vh - 250px);
  width: 1000px;
`

export const HeroText = styled.h1`
  color: #ab52ff;
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`

export const Subtitle = styled(HeroText)`
  color: #fff;
  /* font-weight: 700; */
`

export const StyledLink = styled.a`
  display: block;
  margin-top: 40px;
`

export const StyledButton = styled.button`
  border: 0;
  color: #fff;
  background-color: #9254de;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  padding: 8px 16px;
  width: 282px;
`
