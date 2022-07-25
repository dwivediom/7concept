import React, { useRef } from 'react'
import "../../../../App.css"
function UseRefHookEx() {
    let inputRef = useRef(null)   //null is initial state 
     
     function onclick(){ 
         inputRef.current.value= ""; 
         inputRef.current.focus(); 
     }


  return (
   

    <><div className='card-title'>UseRefHookEx</div>
    
    <input type="text" placeholder='wirte something ' ref={inputRef}  />
    <button className='btn '  onClick={onclick}>Clear input</button>
    
    </>
    
  )
}

export default UseRefHookEx