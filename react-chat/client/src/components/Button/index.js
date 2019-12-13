import styled from 'styled-components';
import React from 'react';

export default React.memo((props) => <Button {...props}/>)

const variants = {
  'primary': '#37c953',
  'warning': '#ffca28',
  'danger': '#f56565',
  'default': '#99a0ac'
};

const Button = styled.button`
  border-radius: 3px;
  background: ${props => variants[props.variant]};
  color: #fff;
  font-weight: 600;
  padding: 7px 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  &:hover {
    box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  }
`;