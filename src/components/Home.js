import React from 'react';
import {BsFillCartFill} from 'react-icons/bs'
import {BsFillMoonStarsFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className='mx-12 flex col-auto pt-4'>
    
    <div className='mx-2'>
        <BsFillCartFill size={40}/>
      </div>
      
    
      <h1 className=' align text-left font-bold text-3xl'>Kids</h1>
      <div className=' flex justify-between items-center text-xl h-10 max-w-[1240px] mx-auto px-4'>
        <ul className='flex'>
            <li className='p-1 m-2 font-bold'>Best Service</li>
            <li className='p-1 m-2 font-bold'>Customer Service</li>
            <li className='p-1 m-2 font-bold'>Toys&Games</li>
            <li className='p-1 m-2 font-bold'>Sell</li>
            <li className='p-1 m-2 font-bold'>All</li>
        </ul>
        
      </div>


















      
    </div>
  );
}

export default Home;
