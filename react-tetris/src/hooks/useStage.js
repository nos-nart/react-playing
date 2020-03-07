import { useState, useEffect } from 'react';
// import { createStage } from ''

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState({})

  useEffect(() => {
    const updateState = prevStage => {
      const newStage = prevStage.map(row => {
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      })
    }

    setStage(prev => updateState(prev))
  }, [])

  return [stage, setStage];
}