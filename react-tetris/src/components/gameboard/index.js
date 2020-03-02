import React from 'react'
import Cell from '../cell/index';
import { Board } from './styled';

export default function index({size}) {
console.log("index -> size", size)

  return <Board _width={size[0].length} _height={size.length}>
    {size.map(row =>
      row.map((cell, index) => 
        <Cell key={index} type={'L'}/>
      )
    )}
  </Board>
}
