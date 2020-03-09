import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import CustomLayout from './components/CustomLayout'
import './App.css';

import Login from './routes/Login';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <RouterWrapper path="/" exact={true} component={Home} layout={CustomLayout}/>
        <RouterWrapper path="/login" exact={false} component={Login} layout={AuthLayout}/>
      </Switch>
    </Router>
  );
}

function RouterWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return <Route {...rest}
    render={(props) => <Layout {...props}>
      <Component {...props}/>
    </Layout>}
  />
}

export default App;
