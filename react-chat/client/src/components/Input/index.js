import React from 'react';
import styled from 'styled-components';

export default React.memo((props) => <Input {...props}/>)

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  padding: 7px 15px;
  border: 1px solid #d9d9d9;
  color: rgba(0,0,0,0.65);
  transition: 0.3s;
  margin-bottom: 0.7rem;
  ::placeholder {
    &:focus::-webkit-input-placeholder {
      transition: text-indent 0.4s 0.4s ease;
      text-indent: -100%;
      opacity: 1;
    }
  }
  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  }
`;
