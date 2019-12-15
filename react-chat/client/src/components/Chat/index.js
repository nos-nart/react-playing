import React from 'react'
import styled from 'styled-components';
import queryString from 'query-string';
import io from 'socket.io-client';
import {useForm} from '../../hooks/use-form';
import { formBackground, borderBottom } from '../../styles/theme';
import Text from '../Text/index';
import Button from '../Button/index';

let socket;
let ENDPOINT = 'localhost:5000';

export default function Chat({location}) {
  const [states, setStates] = React.useState({ name: '', room: '' });
  const [messages, setMessages] = React.useState([]);
  const [values, handleChange] = useForm({mssg: ''});
  console.log("TCL: Chat -> values", values.mssg)
  
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
  }, [ENDPOINT, location.search]);

  React.useEffect(() => {
    socket.on('message', (mssg) => {
      setMessages([...messages, mssg]);
    })
  }, [messages]);

  return <ChatWrapper>
    <ChatContainer>
      <ChatRoom fw="bold" size="xl">{states.room}</ChatRoom>
      <MessageContainer>

      </MessageContainer>
      <MssgInputContainer>
        <ChatInput placeholder="write a message ..." name="mssg" value={values.mssg} onChange={handleChange}/>
        <ChatButton variant="primary">send</ChatButton>
      </MssgInputContainer>
    </ChatContainer>
  </ChatWrapper>
};

const ChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
`;

const ChatContainer = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  width: 25rem;
  border-radius: 5px;
  background: ${formBackground};
  box-shadow: 0 0 1px #f0f2f71a, 0 6px 12px #0020801a;
  height: 450px;
  overflow: hidden;
`;

const ChatRoom = styled(Text)`
  padding: 10px;
  border-bottom: 1px solid ${borderBottom};
`;

const MessageContainer = styled.div`

`;

const MssgInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ChatInput = styled.input`
  outline: none;
  padding: 10px 15px;
  border: 1px solid #d9d9d9;
  color: rgba(0,0,0,0.65);
  width: fill-available;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const ChatButton = styled(Button)`
  width: min-content;
  padding: 11px 15px;
  border-radius: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
