import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
