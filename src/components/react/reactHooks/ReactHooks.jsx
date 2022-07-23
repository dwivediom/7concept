import React from 'react'
import Navbar from '../../Navbar'

import UseReducerTutorial from './UseReducerTutorial'
import Usestate from './Usestate'

function ReactHooks() {
  return (
     
    <div> 
        <Navbar/>
        <h4 className='lfmargin'>React Hooks </h4>


         <Usestate/>
         <UseReducerTutorial/>
    </div>
  )
}

export default ReactHooks