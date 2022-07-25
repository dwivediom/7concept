import React, { useRef } from 'react'
import ChildComponent from './ChildComponent'

function UseEmparitiveHandleEx() {
      const toggleRef = useRef(null)

  function onclick(){ 
       toggleRef.current.alterToggle()
  }
 
  return (

    <>
      <div className="card-title">useImperativeHandle</div>
     <button onClick={onclick} className='btn cmargin'>parent button </button>
      <ChildComponent ref={toggleRef}/>
    

    </>
  )
}

export default UseEmparitiveHandleEx