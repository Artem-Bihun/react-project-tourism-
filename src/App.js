import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderTop from './components/HeaderTop';

import HeaderMiddle from './components/HeaderMiddle';
  import Trolley from './components/Trolley';

import Categories from './components/Categories';
  import Sort from './components/Sort';

import Home from './components/Home';

import Tents from './components/pages/Tents';
import SleepingBags from './components/pages/SleepingBags';
import BackPacks from './components/pages/BackPacks';
import Umbrellas from './components/pages/Umbrellas';
import MeansFire from './components/pages/MeansFire';
import Crockery from './components/pages/Crockery';
import RelatedProducts from './components/pages/RelatedProducts';

import Text from './components/Text';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <HeaderTop />
      <HeaderMiddle />
          <Trolley />
      <Categories />
          <Sort />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/tents" element={<Tents />}></Route>
        <Route path="/sleeping-bags" element={<SleepingBags />}></Route>
        <Route path="/backpacks" element={<BackPacks />}></Route>
        <Route path="/umbrellas" element={<Umbrellas />}></Route>
        <Route path="/means-fire" element={<MeansFire />}></Route>
        <Route path="/crockery" element={<Crockery />}></Route>
        <Route path="/related-products" element={<RelatedProducts />}></Route>

      </Routes>

      <Text />
      <Footer />
    </div>
  );
}

export default App;
