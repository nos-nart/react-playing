import { useState } from 'react';
// import { createStage } from ''

export const useStage = () => {
  const [stage, setStage] = useState({})

  return [stage, setStage];
}