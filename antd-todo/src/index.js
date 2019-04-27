import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import 'antd/dist/antd.css'
import './assets/style.css'
import { Provider } from 'react-redux'
import reducers from './redux/reducers/index'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
    reducers,
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);