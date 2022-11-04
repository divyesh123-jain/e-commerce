import React from 'react';
import {BsFillHeartFill} from 'react-icons/bs'
import pic from '../images/pic.jpg'
import pic2 from '../images/pic2.jpg'

const Profile = () => {
  return (
    <div className='pt-55'>
    
      <h1 className= 'flex align text-left mx-44 pt-24 font-bold text-4xl text-white '>Choose Your</h1>
     
      <div className='flex justify-around'>
      
        <p className='flex justify-between pt-24 mx-72 text-2xl font-semibold'>
       
        <BsFillHeartFill size={80} color="red" />
       
        

            
            
           
        </p>
       
        
        <div className='flex flex-row-reverse space-x-4 space-x-reverse relative bg-gradient-to-b from-teal-500   '>
        <img className=' rounded-full w-80 h-80 '
         src={pic} alt='' />
         </div>
        <div className='relative bg-gradient-to-b from-teal-500 '>
         <img className='rounded-full w-80 h-80'

         src={pic2} alt="" />

        </div>
      </div>

    </div>
  );
}

export default Profile;
