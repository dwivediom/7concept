import React,{useState} from 'react'
import  'materialize-css';
import "../App.css"; 
                                      


function Usestate() {

   const [Data, setData] = useState(0)
  return (
    <> 
        
        <div class="card-panel hoverable lfmargin"> 
         <div className="card-title fontPopins  "><h6>useState hooks</h6> </div>

         <div className='card-desc'> use state hooks are used to update some variable  , 
          if you try to uapdate a variable without  useState hooks then the variable will not render  but the value will change 
          <br /> in other words  when  the value will change the elemnet or page will rerender 
           
          </div>
          <code> 
             import {"{useState}"} from ' react'
             <br />
            const[Data, setData] = useState(initial value)
             <br /> 
             <p> // to change the value of state   </p>
              setstate(changed_value)
          </code>
          <hr />
          <h6>example </h6>
            <button  className=' waves-effect  btn' onClick={()=>{setData(Data+1)}}> increase </button>  {Data} 
              <br />
              <br />
             <code>

             const [Data, setData] = useState(0)
             <br />
             {`<button  className=' waves-effect  btn' onClick={()=>{setData(Data+1)}}> increase </button>  {Data} `}
             <br />
             </code>
          <div> 
             
          </div>
        
        
        </div>
        

    </>
  )
}

export default Usestate