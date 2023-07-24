import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/missions/Missions';

import './styles/App.css';

const App = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </HashRouter>
);

export default App;
