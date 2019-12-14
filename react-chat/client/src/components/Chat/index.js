import React from 'react'
import styled from 'styled-components';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
let ENDPOINT = 'localhost:5000';

export default function Chat({location}) {
  const [states, setStates] = React.useState({ name: '', room: '' });
  // console.log("TCL: Chat -> states", states)
  React.useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setStates({ name, room});
    socket.emit('join', {name, room}, () => {

    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search])

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
