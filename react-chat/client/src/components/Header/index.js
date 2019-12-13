import React from 'react'
import styled from 'styled-components';
import ToggleMode from '../ToggleMode';

export default function Header() {
  return <HeaderWrapper>
    <HeaderContainer>
      <ToggleMode/>
    </HeaderContainer>
  </HeaderWrapper>
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 3rem;
  margin: 0 auto;
  max-width: 80vw;
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;
