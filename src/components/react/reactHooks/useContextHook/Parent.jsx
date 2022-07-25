import React, { useContext } from 'react'
import { AppContext } from './UseContextEx'

export const Parent = () => {
    let {inputval}=useContext(AppContext); 
  return (
    <div>parent component 
     
      <div style={{"borderRadius": "2px solid aqua "}}>{inputval}</div>

 

    </div>
  )
}
