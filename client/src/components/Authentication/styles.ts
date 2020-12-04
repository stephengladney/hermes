import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  height: 500px;
  left: calc(50vw - 250px);
  position: absolute;
  text-align: center;
  top: calc(50vh - 250px);
  width: 500px;
`

export const MessageText = styled.h1`
  color: #666;
  margin: 10px;
`

const FadeBlink = keyframes`
0% { opacity: 0.1 }
 100% { opacity: 1; }
`

export const Petasos = styled.img.attrs(_ => ({ src: "hat.png" }))`
  animation: ${FadeBlink} 2s ease-out;
`
