import React from 'react';
import { useMode } from '../../../hooks/use-theme';
import Logo from './logo';
import styled from '@emotion/styled';
import { mq } from '../../../styles/theme';
import {ToggleMode} from './toggle-mode';

export const Header = () => {
  const { mode, toggleMode } = useMode();

  return <header data-testid="header">
    <HeaderWrapper>
      <HeaderContainer>
        <Logo/>
        <ToggleMode/>
      </HeaderContainer>
    </HeaderWrapper>
  </header>
};

const HeaderWrapper = styled.div`
  height: 44px;
  width: 100vw;
  box-shadow: 0 1px 2px #00000026;
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled('nav')`
  ${mq({
    width: ['100%', '100%', '992px'],
    margin: '0 auto',
    padding: ['0 1em', '0 1em', '0 2em'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  })};
`;
