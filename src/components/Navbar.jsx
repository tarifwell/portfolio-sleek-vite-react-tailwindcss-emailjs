import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
        {/* w-10 and h-10 is equivalent to 2.5rem or 40px */}
        {/* shadow-md to give shadow to the element and make it as like floating on the top */}
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">AH</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">

            {/* <NavLink to="/">Home</NavLink> */}
            {/* replace "text-blue-500" by "blue-gradient_text" */}
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>Contact</NavLink>

        </nav>

    </header>
  )
}

export default Navbar;