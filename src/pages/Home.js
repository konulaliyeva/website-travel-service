import React from 'react';
import View from '../components/home/View';
import Resorts from '../components/home/Resorts';
import Footer from '../components/home/Footer';
import Land from '../components/home/Land';
import Navbar from '../components/home/Navbar';
import Book from '../components/home/Book';
import Destinations from '../components/home/Destinations';
function Home() {
  return (
    <div>
      <Navbar/>
      <Land />
      <Resorts/>
      <Book />
      <Destinations />
      <View/>
      <Footer />
    </div>
  );
}

export default Home;