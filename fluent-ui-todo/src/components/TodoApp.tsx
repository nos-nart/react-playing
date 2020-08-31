import React from 'react';
import { Stack } from '@fluentui/react';

export const TodoApp = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack style={{ width: 400 }} gap={25}>
        <TodoHeader/>
        <TodoList />
        <TodoFooter />
      </Stack>
    </Stack>
  )
}
