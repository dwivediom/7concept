import React from 'react';
import logo from './logo.svg';
import './App.css';
import Usestate from '../src/components/Usestate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseReducer from './components/UseReducer';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/7concept" element={<Homepage/>} />
          <Route path="/" element={<Usestate/>} />
          <Route path="/useReducer" element={<UseReducer/>} />
      </Routes>
    </BrowserRouter>
   
       
  
  );
}

export default App;
