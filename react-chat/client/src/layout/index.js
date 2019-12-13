import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

export default ({ children }) => (
  <Layout>
    <Header/>
    { children }
  </Layout>
);

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;
