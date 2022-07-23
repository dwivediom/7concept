import React, { useEffect, useReducer} from 'react'
import 'materialize-css';
import "../../../App.css";

import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css"

function UseReducerTutorial() {
  useEffect(() => {
    Prism.highlightAll();


  }, [])

  return (
    <>
      <div className="card-panel hoverable lfmargin">
        <div className="card-title fontPopins  "><h6>useState hook</h6> </div>

        <div className='card-desc'> useReducer hooks dose  same  job as useState hook 
        <br />  but we use  useReducer hook where we have to deal with  multipule state at same time 
        <br /> <b> Working</b> <br />
        The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second
        <pre> <code className='language-javascript'> {`const [state, dispatch] = useReducer(reducer, <initalState>)
           //<initalState>  is a object most of the time like {count:0 , showtext : true }`} </code></pre>

           <br />useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it
           <br />
           <b>reuducer function</b><br />
           The reducer function itself accepts two parameters and returns one value. The first parameter is the current state, and the second is the action. The state is the data we are manipulating. The reducer function receives an action, which is executed by a dispatch function:
           <pre> <code className="language-javascript">
           {`function reducer(state, action) { }

dispatch({ type: 'increment' })`}
            
            </code></pre>
           
            
           
        </div>
        <pre><code className='language-javascript'>
          {`import {"{useState}"} from ' react
const[Data, setData] = useState(initial value)
           
// to change the value of state  
setstate(changed_value)`}
        </code >
        </pre>
        <hr />
        <h6>example </h6>
        <button className=' waves-effect  btn'> increase </button>
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
export default UseReducerTutorial