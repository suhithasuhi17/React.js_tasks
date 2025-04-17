import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Sidebar from './Components/Sidebar';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
