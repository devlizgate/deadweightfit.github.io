import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'; // If you have a Hero component

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Add other sections or components here */}
      </main>
      <Footer />
    </>
  );
};

export default App;
