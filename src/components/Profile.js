import React from 'react';
import {BsArrowRight} from 'react-icons/bs'
import pic from '../images/pic.jpg'
const Profile = () => {
  return (
    <div className='pt-55'>
    
      <h1 className= 'flex align text-left mx-44 pt-36 font-bold text-4xl '>Choose Your</h1>
      <div>
        <p className='flex pt-10 mx-72 text-3xl font-semibold'>

            Baby Dress
        </p>
        <div>
        <img src={pic} alt='' />

        </div>
      </div>

    </div>
  );
}

export default Profile;
