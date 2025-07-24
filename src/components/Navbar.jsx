import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user from context

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-black shadow-md'>
      <div className='flex items-center space-x-8'>
        <img src='/logo.svg' alt="Logo" className='w-[50px] h-auto' />
        <NavLink to="/" className='text-3xl font-bold text-blue-500 hover:underline'>
          Anime
        </NavLink>
        <NavLink to="/watchlist" className='text-3xl font-bold text-blue-500 hover:underline'>
          Watch-list
        </NavLink>
      </div>

      <div>
        {user ? (
          <button
            onClick={handleProfileClick}
            className='bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition'
          >
            Profile
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className='bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition'
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};
