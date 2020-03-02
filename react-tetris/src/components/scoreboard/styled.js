import styled from 'styled-components'

export const ScoreBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  margin-left: 2rem;
  font-family: 'VT323';
`
export const Display = styled.div`
  border-radius: 3px;
  border: 1px solid #40a9ff;
  padding: 0.5rem 1rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;

  span:nth-child(1) {
    margin-right: 0.25rem;
    text-transform: uppercase;
  }
`

export const StartButton = styled.button`
  outline: none;
  border: none;
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: 3px;
  text-transform: uppercase;
  background: #38a169;
  color: #fff;
  cursor: pointer;
  font-family: 'VT323';
  font-size: 1.25rem;
`
