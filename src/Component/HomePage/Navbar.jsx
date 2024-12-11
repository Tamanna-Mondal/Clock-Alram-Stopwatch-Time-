import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaClock } from 'react-icons/fa';  // Importing moon, sun, and clock icons
import './Navbar.css';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the default theme (dark mode) when the component is mounted
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo-container">
        <h1 className="logo">
        <FaClock className="clock-icon" /> 
        </h1>
      </div>
      <div className="linkPart">
        <Link to="/home">Home</Link>
        <Link to="/alarm">Alarm</Link>
        <Link to="/stopwatch">Stopwatch</Link>
      </div>
      {/*Theams*/}
      <div className="theme-icon" onClick={toggleTheme}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
}
