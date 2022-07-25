import React,{useContext} from 'react'
import { AppContext } from './UseContextEx'




export const Child = () => {
    const {setinputval }= useContext(AppContext); 
    function handleOnChange(event){ 
       let val =  event.target.value
       setinputval(val)
    }
  return (
    <div>Child 

         <div>
         <input type="text" onChange={handleOnChange} placeholder='insert in parent component ' />
         </div>
    </div>

  )
}
