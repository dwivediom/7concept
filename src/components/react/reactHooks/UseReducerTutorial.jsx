import React, { useEffect, useReducer} from 'react'
import 'materialize-css';
import "../../../App.css";

import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css"


function reducer(state ,action ){ 
  switch(action.type){ 
         case "increment": return {count : state.count +1}; 
         
          case "decrement":return {count: state.count -1 }

          default : return {count: state.count}
  }   
}

function UseReducerTutorial() {
  useEffect(() => {
    Prism.highlightAll();


  }, [])



  const [state , dispatch]= useReducer(reducer , { count:0})

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
           {`function reducer(state, action) { 
 // case increment is a action            
switch (action.type) {
  case 'increment':
    return {count: state.count + 1};
  default:                    
    throw new Error();
}
}

`}
            
            </code></pre>
           
            <b>dispatch() method </b>
 The dispatch function accepts an object that represents the type of action we want to execute when it is called <br />
  in other words  it tell the action to change the state related to that action 
           
        </div>
        <pre><code className='language-javascript'>
          {`// dispatching an action with useReducer
 <button onClick={() => dispatch({type: 'increment'})}>Increment</button>`}
        </code >
        </pre>
        If the action type in the code above is increment, our state object is increased by 1 <br />
        The actions that will be dispatched by our components should always be represented as one object with the type and payload key, where type stands as the identifier of the dispatched action and payload is the piece of information that this action will add to the state.
        <hr />
        <h6>example </h6>
        <b> counter app using useReducer</b><br /><br />
        <button className=' waves-effect  btn' onClick={()=>dispatch({type:"increment"})}> increase </button>
        <h4> {state.count}</h4>
        <button className=' waves-effect  btn' onClick={()=>dispatch({type:"decrement"})}> decrease </button>

        <br />
        <br />
        <pre>
        <code className='language-javascript language-html' >

          {`import React, { useReducer } from 'react';

const initialState = { count: 0 }
 // The reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return {count: state.count = 0}
    default:
     return { count: state.count  }
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.count}
       <br />
       <br/>
       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
       <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
       <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  );
};

export default Counter;}`}
         
        </code>
        </pre>

        

        <div>

        </div>


      </div>


    </>
  )
}
export default UseReducerTutorial