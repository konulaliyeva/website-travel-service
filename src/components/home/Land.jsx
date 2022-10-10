import React from 'react';
import beachVid from '../../assets/tourism.mp4';

const Land = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Azerbaijan Travel Advisory</h1>
        <h2 className='py-4 font-medium'>Top 1% locations selected for this website</h2>
        
      </div>
    </div>
  );
};

export default Land;
