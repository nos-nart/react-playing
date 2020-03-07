export const WIDTH = 12;
export const HEIGHT = 20;

export const createStage = () => {
  return Array.from(Array(HEIGHT), () => new Array(WIDTH).fill([0, 'clear']))
}
