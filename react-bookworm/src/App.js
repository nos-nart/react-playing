import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Router>
  );
}

export default App;
