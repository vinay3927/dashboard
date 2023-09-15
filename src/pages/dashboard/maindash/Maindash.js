import React from 'react';
import './Maindash.css';
import Header from './header/Header';
import Cards from './cards/Cards';
import Activities from './activities/Activities';
import Bigcards from './bigcards/Bigcards';

const Maindash = () => {
  return (
    <div className='maindash'>
      <Header />
      <Cards />
      <Activities />
      <Bigcards />
    </div>
  );
};

export default Maindash;
