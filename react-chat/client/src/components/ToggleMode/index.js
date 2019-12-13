import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { FiSun, FiMoon } from "react-icons/fi";

export default function ToggleMode() {
  return <ThemeConsumer>
    {
      theme => {
        const isLight = Object.is(theme.mode, 'light')
        console.log(theme)
        return (
          <ToggleContainer onClick={e => theme.toggle(
            Object.is(theme.mode, 'dark') ? 'light' : 'dark'
          )}>
            <IconSun sunRises={isLight}>
              <FiSun size={15} />
            </IconSun>
            <IconMoon sunRises={isLight}>
              <FiMoon size={15} />
            </IconMoon>
          </ToggleContainer>
        )
      }
    }
  </ThemeConsumer>
};

const btn_bg = {
  light: '#192039',
  dark: '#b9c0d3'
}

const btn_cl = {
  light: '#b9c0d3',
  dark: '#192039'
}

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 3.5rem;
  height: 1.5rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  outline: none;
  background: ${btn_bg};
  overflow: hidden;
`;

const IconModeWrapper = styled.span`
  position: absolute;
  transition: all 0.5s linear;
  color: ${btn_cl};
`;

const IconSun = styled(IconModeWrapper)`
  left: 5px;
  transform: ${({ sunRises }) =>
    sunRises ? 'translateY(0px)' : 'translateY(100px)'};
`;

const IconMoon = styled(IconModeWrapper)`
  right: 5px;
  transform: ${({ sunRises }) =>
    sunRises ? 'translateY(-100px)' : 'translateY(0px)'};
`;
