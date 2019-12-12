import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Route path="/" exact component={Join}/>
            <Route path="/chat" exact component={Chat}/>
        </Router>
    )
}
