import styled from 'styled-components';
import React from 'react';
import { formBackground, borderBottom, nonCurrentMssgBg, currentMssgBg } from '../../styles/theme';
import Text from '../Text/index';

export default function Message({message: {user, text}, name}) {
  console.log("TCL: Message -> name", name)
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (trimmedName === user) {
    isSentByCurrentUser = true;
  }

  const showMessage = (isSentByCurrentUser, text, name) => {
    return isSentByCurrentUser ?
    <CurrentUserMssg>
      <span className="message">{text}</span>
      <span className="user">
        <Text size="sm" fw="bold">{name.split('').splice(0, 2).join('')}</Text>
      </span>
    </CurrentUserMssg> :
    <NonCurrentUserMssg>
      <span className="user">
        <Text size="sm" fw="bold">{name.split('').splice(0, 2).join('')}</Text>
      </span>
      <span className="message">{text}</span>
    </NonCurrentUserMssg>
  }

  return <>
    {user === 'admin' ? <Text align="center" size="xs" style={{ padding: '10px 0' }}>{text}</Text> : showMessage(isSentByCurrentUser, text, name)}
  </>
};

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const CurrentUserMssg = styled(MessageContainer)`
  justify-content: flex-end;
  .message {
    border-radius: 999px;
    background: ${currentMssgBg};
    padding: 7px 10px;
    color: #fff;
    word-break: break-all;
    width: fit-content;
  }
  .user {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 999px;
    background: ${borderBottom};
    color: ${formBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5em;
  }
`;

const NonCurrentUserMssg = styled(MessageContainer)`
  justify-content: flex-start;
  .message {
    border-radius: 999px;
    background: ${nonCurrentMssgBg};
    padding: 7px 10px;
    color: #fff;
    margin-left: 0.5em;
    word-break: break-all;
    width: fit-content;
  }
  .user {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background: ${borderBottom};
    color: ${formBackground};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;