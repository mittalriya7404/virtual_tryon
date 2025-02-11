import React from 'react'
import Nexticon from '../assets/models/images/icon.png'


const NavbarDesign = () => {
    
  return (
    <nav className=" w-screen h-20 text-light bg-nav">
          
            <div className="fixed px-11  container mx-auto w-screen h-16 flex bg-navs justify-between items-center shadow-md z-50">
                <div className='text-black flex font-bold'>
                    <img src={Nexticon} alt="" />
                    Nextcent
                </div>
            <div className="flex space-x-10 pr-11 text-sm text-black items-center justify-center">
             
              
              <a href="#home" className="hover:text-gray-400 transition">Home</a>
              <a href="#about" className="hover:text-gray-400 transition">Service</a>
              <a href="#contact" className="hover:text-gray-400 transition">Feature</a>
              <a href="#contact" className="hover:text-gray-400 transition">Product</a>
              <a href="#contact" className="hover:text-gray-400 transition">Testimonial</a>
              <a href="#contact" className="hover:text-gray-400 transition">FAQ</a>
              
              {/* <a href="#UserProfile" className="hover:text-gray-400 transition"><Profile/></a> */}
            </div>
            
            <div>
                <button className='bg-white text-green-500 mx-6'>Login</button>
                <button className='bg-green-500 text-white w-20 h-9 rounded'>Signup</button>
        

            </div>
            </div>
            
        </nav>
      );
    };

export default NavbarDesign