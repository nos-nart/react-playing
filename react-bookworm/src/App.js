import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthLayout from './components/Layout/Login';
import PrivateLayout from './components/Layout/Private'
import './App.css';

import * as ROUTES from './constants/routes';

import Login from './routes/Login';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} render={props => 
          <LoginLayout {...props}>
            <Login {...props} />
          </LoginLayout>
        } />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

function PrivateRouter({
  component: Component,
  ...rest
}) {
  return <Route {...rest} render={(props) => 
    <PrivateLayout {...props}>
      <Component {...props}/>
    </PrivateLayout>
  }/>
}

export default App;
