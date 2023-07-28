import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TesteDois } from './components/testeDois';
import { Teste } from './components/header';

function App() {
  return (
    <>
    <body>
       <div>
          <Teste></Teste>
       </div>
        <BrowserRouter>
          <Routes>
            <Route path='/palmeiras' element={
              <TesteDois nome='Cleiton' idade={80}/>}>
            </Route>
            <Route path='/ola' element={<><h1>Ola</h1></>}></Route>
          </Routes>
        </BrowserRouter>
      </body>
    </>    
  );
}

export default App;
