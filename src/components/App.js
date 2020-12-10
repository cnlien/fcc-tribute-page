import React from 'react';

// COMPONENTS
import Header from '../components/Header.jsx'
import TributeInfo from '../components/TributeInfo.jsx'
import Footer from '../components/Footer.jsx'

// STYLES
import '../styles/global.scss'

const App =()=> {
  return (
    <div className="App" id="main">
      <Header />
      <TributeInfo />
      <Footer />
    </div>
  );
}

export default App;
