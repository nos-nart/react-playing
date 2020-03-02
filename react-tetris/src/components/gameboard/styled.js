import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props._width}, 1fr);
  border: 1px solid #40a9ff;
  border-radius: 3px;
  overflow: hidden;
`
