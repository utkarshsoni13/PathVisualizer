import React, {Component} from 'react';

import './node.css';

export default function Node (props){
  const extraClassName=props.isFinish?'node-finish':props.isStart?'node-start':props.isWall?'node-wall':'';
  return (<div 
      id={`node-${props.row}-${props.col}`}
      className={`node ${extraClassName}`}
      onMouseDown={()=>props.onMouseDown(props.row,props.col)}
      onMouseEnter={()=>props.onMouseEnter(props.row,props.col)}
      onMouseUp={()=>props.onMouseUp()}>
        
  </div>)
}