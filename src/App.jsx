// src/App.js
import React from 'react';
import HolisticComponent from './components/HolisticComponent';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import PoseDetection from "./components/PoseDetection";

const App = () => {

  return (
     <div className="bg-white h-screen w-screen">
      <Navbar />
      <HomePage />
      {/* <HolisticComponent /> */}
      {/* <PoseDetection /> */}
      <h1>Live Pose Detection</h1>
    </div>
  );
};


export default App;