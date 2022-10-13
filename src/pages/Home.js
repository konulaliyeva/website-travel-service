import React from 'react';
import View from '../components/home/View';
import Resorts from '../components/home/Resorts';
import Footer from '../components/home/Footer';
import Land from '../components/home/Land';
import Navbar from '../components/home/Navbar';
import Info from '../components/home/Info';
import Destinations from '../components/home/Destinations';



function Home({select, setSelect}) {
  return (
    <div>
      <Navbar/>
      <Land />
       <Resorts/> 
      <Info select={select} setSelect={setSelect}/>
      <Destinations />
      <View/>
      <Footer />
  
    </div>
  );
}

export default Home;