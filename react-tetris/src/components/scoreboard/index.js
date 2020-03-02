import React from 'react'
import {ScoreBoardWrapper, Display, StartButton } from './styled'

export default function index() {
  return <ScoreBoardWrapper>
    <Display>
      <span>score:</span>
    </Display>
    <Display>
      <span>rows:</span>
    </Display>
    <Display>
      <span>level:</span>
    </Display>
    <StartButton>start game</StartButton>
  </ScoreBoardWrapper>
}
