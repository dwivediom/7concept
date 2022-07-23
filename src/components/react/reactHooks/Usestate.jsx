import React, { useEffect, useState } from 'react'
import 'materialize-css';
import "../../../App.css";

import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css"



function Usestate() {
  useEffect(() => {
    Prism.highlightAll();


  }, [])

  const [Data, setData] = useState(0)
  return (
    <>
      <div className="card-panel hoverable lfmargin">
        <div className="card-title fontPopins  "><h6>useState hook</h6> </div>

        <div className='card-desc'> use state hooks are used to update some variable  ,
          if you try to uapdate a variable without  useState hooks then the variable will not render  but the value will change
          <br /> in other words  when  the value will change the elemnet or page will rerender everytime 

        </div>
        <pre><code className='language-javascript'>
          {`import {useState} from ' react
const[Data, setData] = useState(initial value)
           
// to change the value of state  
setstate(changed_value)`}
        </code >
        </pre>
        <hr />
        <h6>example </h6>
        <button className=' waves-effect  btn' onClick={() => { setData(Data + 1) }}> increase </button>  {Data}
        <br />
        <br />
        <pre>
        <code className='language-javascript language-html' >

          {`const [Data, setData] = useState(0);
<button  className=' waves-effect  btn' onClick={()=>{setData(Data+1)}}> increase </button>  {Data}`}
         
        </code>
        </pre>

        <div>

        </div>


      </div>


    </>
  )
}

export default Usestate