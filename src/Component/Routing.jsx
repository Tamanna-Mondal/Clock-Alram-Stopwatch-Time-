import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from './HomePage/Home';
import Stopwatch from './Stopwatch';
import Alarm from './AlarmPage/Alarm';
export default function App() {
  return (
   
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home/>} />
    
    <Route path="/alarm" element={<Alarm />} />
    <Route path="/stopwatch" element={<Stopwatch />} />
  </Routes>
   
  );
}
