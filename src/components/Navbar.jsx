import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className='flex flex-row w-full bg-black'>
            <nav className='flex space-x-8 w-full items-center p-4 bg-black mx-4 justify-center'>
            {/* <img src='/logo.svg' alt="logo" className='w-[50px]' /> */}
            <div className="text-3xl fixed left-3 top-3 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
  Anime Ecstasy
</div>

            <NavLink to={""} className='text-xl font-bold text-white hover:text-purple-500'>Home</NavLink>
            <NavLink to={""} className='text-xl font-bold text-white hover:text-cyan-400'>Categories</NavLink>
            
            <NavLink to={""} className='text-xl font-bold text-white hover:text-blue-500'>Trending</NavLink>
            <NavLink to={"/watchlist"} className='text-xl font-bold text-white hover:text-pink-300'>Watch-list</NavLink>
          
        </nav>
        <div className='flex fixed top-[25px] right-[150px]'>
          <FaSearch color='white'/>
        </div>
        <div className='flex items-end'>
          
            <button className='bg-pink-500 rounded-md p-2 w-[7rem] m-2 hover:bg-yellow-500 hover:text-[black]'>Login</button>
        </div>
        </div>
        
        
    )
}

