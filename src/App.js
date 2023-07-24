import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import './styles/App.css';

const App = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>Rockets</h1>} />
      <Route path="/missions" element={<h1>Missions</h1>} />
      <Route path="/profile" element={<h1>My Profile</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </HashRouter>
);

export default App;
