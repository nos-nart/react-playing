import React from 'react';
import './App.css';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@fluentui/react';

function App() {
  initializeIcons();
  return (
    <div className="App">
     <TodoApp />
    </div>
  );
}

export default App;
