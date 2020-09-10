import React from 'react';
import { Flex } from '@fluentui/react-northstar'
import { Search } from './components/Search'

function App() {
  return (
    <Flex>
      <Flex.Item>
        <Search/>
      </Flex.Item>
      <Flex.Item grow styles={{ background: '#100E1D' }}>
        <span>display weather within a week</span>
      </Flex.Item>
    </Flex>
  );
}

export default App;
