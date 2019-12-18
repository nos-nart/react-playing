import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { ModeProvider } from './hooks/use-theme';
ReactDOM.render(
    <ModeProvider>
        <App />
    </ModeProvider>,
    document.getElementById('root')
);

