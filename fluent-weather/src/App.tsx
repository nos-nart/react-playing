import React from 'react';
import { SearchBar } from './components/SearchBar';
import { Flex } from '@fluentui/react-northstar';

function App() {
  return (
    <Flex gap="gap.medium" padding="padding.medium">
      <Flex.Item>
        <SearchBar />
      </Flex.Item>
      <Flex.Item grow></Flex.Item>
    </Flex>
  );
}

export default App;
