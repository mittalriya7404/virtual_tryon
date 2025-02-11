// src/App.js
import React from 'react';
import './App.css';
import NavbarDesign from './components/NavbarDesign';
import HomePage from './pages/HomePage';
import Illustration from './assets/models/images/Illustration.png'
// import bubble from './assets/models/images/Illustration@2x.png'
// import windows from './assets/models/images/windows.png'
// import shadow from './assets/models/images/shadoow.png'


const App = () => {

  return (
    <div classname='bg-white h-screen w-screen'>
      <NavbarDesign></NavbarDesign>
      <div className='h-80 w-screen bg-nav px-40 flex p-9 justify-between'>
        <div className='mx-12'>
        <div className='text-5xl font-semibold'>
          Lessons and insights
        </div>
        <div className='text-5xl font-semibold text-green-500'>
          from 8 years
        </div>
        </div>
        <img src={Illustration} alt="" />

      </div>
      

    </div>
    
      
); 
};


export default App;