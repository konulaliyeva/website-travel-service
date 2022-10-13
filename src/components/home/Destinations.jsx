import React from 'react'

import SelectsCard from './SelectsCard';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4' id='destination'>

    <SelectsCard bg='https://storage.googleapis.com/wzukusers/user-26138364/images/58fe2b643210bLT2R61v/Quba_Rixos_d400.jpg' text='Guba' />
    <SelectsCard bg="https://storage.googleapis.com/wzukusers/user-26138364/images/591a0ed0497d4zRz3C4b/Nohur_Gol_d400.jpg" text='Gabala' />
    <SelectsCard bg='https://cf.bstatic.com/xdata/images/hotel/max1024x768/246670267.jpg?k=630e21f0525774867507c354189091f4c35a93c308a8335e3cc0c67f576a71dc&o=&hp=1' text='Oghuz' />
    <SelectsCard bg='https://cf.bstatic.com/xdata/images/hotel/max1280x900/309266215.jpg?k=d8a595b8d55777a10c5a716ba0d720b59276a20e1b90a25dba9e551ec7444bda&o=&hp=1' text='Lankaran' />
    <SelectsCard bg='https://cdn.getyourguide.com/img/tour/5cf4f705386d3.jpeg/145.jpg' text='Shaki' />
    <SelectsCard bg="https://q-xx.bstatic.com/xdata/images/hotel/840x460/149792343.jpg?k=5e0f3fff1ad1f60a14b8c6f953f7575094b2a1db7ba26d9362c4a68ce2638642&o=" text='Shamakhi' />
    
        
    </div>
  )
}

export default Destinations;