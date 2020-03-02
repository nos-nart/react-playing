import React from 'react'
import { Wrapper, Container } from './styled'

export default function index({ children }) {
  return <Wrapper>
    <Container>
      { children }
    </Container>
  </Wrapper>
}
