import React from 'react'
import styled from 'styled-components';

export default function Chat() {
  return <ChatWrapper>
    <ChatContainer>
      Chat component
    </ChatContainer>
  </ChatWrapper>
};

const ChatWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
`;

const ChatContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;
