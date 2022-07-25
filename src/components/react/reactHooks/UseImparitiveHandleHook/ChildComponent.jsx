import React,{forwardRef, useImperativeHandle, useState} from 'react'
import Usestate from '../Usestate'

 const  ChildComponent= forwardRef((props , ref )=> {
 // forward ref is used to get ref form parent to child  like props 
 //Ref forwarding is a technique for automatically passing a ref through a component to one of its children
 const [toggle, settoggle] = useState(true)
  useImperativeHandle(ref , ()=>({ 
     //  this function take an obeject which we want to cnage  and cal this value for parent component using ref 
        alterToggle: function alterToggle(){ 
                     settoggle(!toggle)            
        }
     
  }))



  
    function onclick(){ 
        settoggle(!toggle)
    }
  return (
        
    <>
    <button className='btn btn-small cmargin ' onClick={onclick}>child button </button>
    {toggle&&<span>Toggle when child is clicked and also we can toggle it form parent button using <code className='language-javascript'>  UseImparitiveHandleHook     </code> </span>}
    </>
  
  )
})

export default ChildComponent