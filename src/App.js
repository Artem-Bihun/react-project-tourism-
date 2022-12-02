import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderBottom from './components/HeaderBottom';
import HeaderMiddle from './components/HeaderMiddle';
import HeaderTop from './components/HeaderTop';

import Home from './components/pages/Home';
import Tents from './components/pages/Tents';
import Footer from './components/Footer';
import Trolley from './components/pages/Trolley';
import SleepingBags from './components/pages/SleepingBags';

function App() {
  return (
    <div>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tents" element={<Tents />}></Route>
        <Route path="/sleeping-bags" element={<SleepingBags />}></Route>


        <Route path="/trolley" element={<Trolley />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
