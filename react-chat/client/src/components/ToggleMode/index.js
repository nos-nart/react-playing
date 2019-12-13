import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { FiSun, FiMoon } from "react-icons/fi";
import { toggleColor, toggleBackground } from '../../styles/theme';

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
  background: ${toggleBackground};
  overflow: hidden;
`;

const IconModeWrapper = styled.span`
  position: absolute;
  transition: all 0.5s linear;
  color: ${toggleColor};
`;

const IconSun = styled(IconModeWrapper)`
  left: 5px;
  transform: ${({ sunRises }) =>
    sunRises ? 'translateY(2px)' : 'translateY(100px)'};
`;

const IconMoon = styled(IconModeWrapper)`
  right: 5px;
  transform: ${({ sunRises }) =>
    sunRises ? 'translateY(-100px)' : 'translateY(2px)'};
`;
