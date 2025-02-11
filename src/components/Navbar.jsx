import React from 'react';
import { Profile } from './icons/Profile';
import Home from './icons/Home';

const Navbar = () => {
  
  
  return (
    <nav className=" w-screen h-20 text-light bg-dark">
      
        <div className="fixed container mx-auto w-screen h-10 flex bg-third justify-end items-center shadow-md z-50">
        <div className="flex space-x-10 pr-11 text-sm text-black items-center">
         
          
          <a href="#home" className="hover:text-gray-400 transition">Home</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          
          <a href="#login" className="hover:text-gray-400 transition">Login/SignUp</a>
          <a href="#UserProfile" className="hover:text-gray-400 transition"><Profile/></a>
        </div>
        
        </div>
        
    </nav>
  );
};

export default Navbar;