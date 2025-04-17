import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Content from './Components/Content';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import'./Landingpage.css'


function App() {
  return (

    <>
      <Header />
      <Content />
     <Contact/>
      <Footer />
      
    </>
   
  );
}

export default App;
