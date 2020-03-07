import React from 'react'
import { Wrapper, Container } from './styled'
import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { createStage } from '../../helpers/createStage';

const Layout = ({ children }) => {
  const [dropTime, setDropTime] = React.useState(null);
  const [gameOver, setGameOver] = React.useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  }
  
  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }

  return <Wrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
    <Container>
      { children }
    </Container>
  </Wrapper>
}

export default Layout;
