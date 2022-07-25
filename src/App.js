import React from 'react';
import logo from './logo.svg';
import './App.css';
import Usestate from '../src/components/react/reactHooks/Usestate'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './components/Homepage';
import ReactHooks from './components/react/reactHooks/ReactHooks';
import Testground from './components/Testground';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/7concept" element={<Homepage/>} />
          <Route path="/" element={<Usestate/>} />
          <Route path="/ReactHooks" element={<ReactHooks/>} />
          <Route path="/TestGround" element={<Testground/>} />
      </Routes>
    </BrowserRouter>
   
       
  
  );
}

export default App;
