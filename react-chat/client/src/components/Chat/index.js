import React from 'react'
import styled from 'styled-components';
import queryString from 'query-string';
import io from 'socket.io-client';
import { formBackground, borderBottom } from '../../styles/theme';
import Text from '../Text/index';
import Button from '../Button/index';
import { MdClose } from "react-icons/md";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message';

let socket;
let ENDPOINT = 'localhost:5000';

export default function Chat({location}) {
  const [states, setStates] = React.useState({ name: '', room: '' });
  const [messages, setMessages] = React.useState([]);
  const [mssg, setMssg] = React.useState('');

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
    };
  }, [location.search]);

  React.useEffect(() => {
    socket.on('message', (mssg) => {
      setMessages([...messages, mssg]);
    });
  }, [messages]);

  const sendMessage = e => {
    console.log('send message actions')
    e.preventDefault();

    if (mssg) {
      socket.emit('sendMessage', mssg, () => setMssg(''))
    }
  };

  console.log(messages)

  return <ChatWrapper>
    <ChatContainer>
      <InfoBar>
        <Text fw="bold" size="xl">{states.room}</Text>
        <CloseChat>
          <MdClose size={20}/>
        </CloseChat>
      </InfoBar>
      <ScrollToBottom>
        {messages.map((m, index) => <Message key={index} message={m} name={states.name}/>)}
      </ScrollToBottom>
      <MssgInputContainer>
        <ChatInput placeholder="write a message ..."
          name="mssg"
          type="text"
          value={mssg}
          onChange={(e) => setMssg(e.target.value)}
          onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />
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
  grid-template-rows: min-content 368px min-content;
  width: 25rem;
  border-radius: 5px;
  background: ${formBackground};
  box-shadow: 0 0 1px #f0f2f71a, 0 6px 12px #0020801a;
  height: 450px;
  overflow: hidden;
`;

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid ${borderBottom};
`;

const CloseChat = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: ${borderBottom};
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
