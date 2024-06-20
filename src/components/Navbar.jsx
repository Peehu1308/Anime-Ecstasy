import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='flex space-x-8 items-center p-4 bg-black'>
            <img src='/logo.svg' alt="logo" className='w-[50px]' />
            <NavLink to={""} className='text-3xl font-bold text-blue-500'>Anime</NavLink>
            <NavLink to={"/watchlist"} className='text-3xl font-bold text-blue-500'>Watch-list</NavLink>
        </nav>
    )
}
