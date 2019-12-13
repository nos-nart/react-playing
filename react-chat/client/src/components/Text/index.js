import React from 'react';
import styled from 'styled-components';

const fws = {
  'bold': '600',
  'normal': '300',
  'extra-bold': '800'
};

const styles = {
  'italic': 'italic'
}

const sizes = {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem'
}

const aligns = {
  'left': 'left',
  'center': 'center',
  'right': 'right'
}

export default React.memo((props) => <Text {...props}/>)

const Text = styled.p`
  font-weight: ${(props) => `${fws[props.fw]}`};
  font-style: ${(props) => `${styles[props.style]}`};
  font-size: ${(props) => `${sizes[props.size]}`};
  text-align: ${(props) => aligns[props.align]}
`;
