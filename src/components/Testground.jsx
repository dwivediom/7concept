import React from 'react'
import UseRefHookEx from './react/reactHooks/UserRefHook/UseRefHookEx'
import "../App.css"
import UseEffectHookTut from './react/reactHooks/UseEffectHook/UseEffectHookTut'
import UseEmparitiveHandleEx from './react/reactHooks/UseImparitiveHandleHook/UseEmparitiveHandleEx'
import { UseContextEx } from './react/reactHooks/useContextHook/UseContextEx'
function Testground() {
    return (

        <>
            <div className=' lfmargin fontPopins  '>  <h4>Test ground</h4></div>

            <div className="card-panel hoverable lfmargin">

                <UseRefHookEx />
            </div>
            <div className="card-panel hoverable lfmargin">
                <UseEmparitiveHandleEx />
            </div>
                 
            <div className="card-panel hoverable lfmargin">
                 <div className="card-title">useContaxt hook </div>
                <UseContextEx />
            </div>


        </>
    )
}

export default Testground