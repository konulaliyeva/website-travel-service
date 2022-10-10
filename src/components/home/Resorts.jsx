import React from 'react';

const Resorts = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>Resorts in the regions</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src="https://images.trvl-media.com/hotels/16000000/15750000/15746100/15746026/a31d393e.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="/" />
            <img className='w-full h-full object-cover' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/128032416.jpg?k=9f32656e74555568a7c6e613b40b9f755d7bfc6942d6361f08dbe8f3ed2ae1dc&o=&hp=1" alt="/" />
            <img className='w-full h-full object-cover' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/248082980.jpg?k=4e229d01d45e28343cfba4b2c5cfb8f057ac0b02664d50e41992af2b4957cd36&o=&hp=1" alt="/" />
            <img className='w-full h-full object-cover' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/248082939.jpg?k=730b5599c681d39a4fb01a2522e81b9ad0402316a895de9e52344c2ba77478d5&o=&hp=1" alt="/" />
            <img className='w-full h-full object-cover' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/309308101.jpg?k=664c916b9e3d9a1061d753ea0aad0c925a114a9e80f8df49b290def9512eca79&o=&hp=1" alt="/" />
        </div>
    </div>
  )
} 

export default Resorts;