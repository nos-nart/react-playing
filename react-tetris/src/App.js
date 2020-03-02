import React from 'react'
import GlobalStyle from './styles/globalStyle'
import Layout from './components/layout/index'
import GameBoard from './components/gameboard/index'
import ScoreBoard from './components/scoreboard/index'
import {generateSize} from './helpers/size'

function App() {
  const size = generateSize();

  return <React.Fragment>
    <GlobalStyle/>
    <Layout>
      <GameBoard size={size}/>
      <ScoreBoard/>
    </Layout>
  </React.Fragment>
}

export default App;
