import React from 'react';
import Cards from './components/Cards';
import HeaderBottom from './components/HeaderBottom';
import HeaderMiddle from './components/HeaderMiddle';
import HeaderTop from './components/HeaderTop';
import Text from './components/Text';
import Footer from './components/Footer';


function App() {
  return (
    <div className="wrap">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
      <Cards />
      <Text />
      <Footer />
    </div>
  );
}

export default App;
