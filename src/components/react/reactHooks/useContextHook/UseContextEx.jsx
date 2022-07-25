import React, { useState } from 'react'
import { createContext } from 'react'
import { Child } from './Child';
import{Parent} from './Parent'

export const  AppContext = createContext(null)

export const UseContextEx = () => {
  const [inputval , setinputval ]= useState(""); 

  return (
  <AppContext.Provider value={{inputval, setinputval}}>
    <Child/><Parent/> 
  </AppContext.Provider>
  )
}
