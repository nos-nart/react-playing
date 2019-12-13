import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formBackground } from '../../styles/theme';
import Text from '../Text/index';
import Input from '../Input/index';
import Button from '../Button/index';
import {useForm} from '../../hooks/use-form';

export default function Join() {
  const [values, handleChange] = useForm({name: '', room: ''});

  return <JoinWrapper>
    <JoinContainer>
      <Text size="base" fw="bold" align="center">join a room for chatting</Text>
      <FormContainer>
        <Input placeholder="Name" type="text" name="name" value={values.name} onChange={handleChange}/>
        <Input placeholder="Room" type="text" name="room" value={values.room} onChange={handleChange}/>
        <br/>
        <Link to={`/chat?name=${values.name}&room=${values.room}`}
          onClick={e => (!values.name || !values.room) ? e.preventDefault() : null}
        >
          <Button type="submit" variant="primary">join</Button>
        </Link>
      </FormContainer>
    </JoinContainer>
  </JoinWrapper>
};

const JoinWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const JoinContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${formBackground};
  box-shadow: 0 0 1px #f0f2f71a, 0 6px 12px #0020801a;
`;

const FormContainer = styled.form`
  margin: 1.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
