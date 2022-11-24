import React from 'react';
import Cards from './components/Cards';
import HeaderBottom from './components/HeaderBottom';
import HeaderMiddle from './components/HeaderMiddle';
import HeaderTop from './components/HeaderTop';


function App() {
  return (
    <div className="wrap">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
      <Cards />
    </div>
  );
}

export default App;
