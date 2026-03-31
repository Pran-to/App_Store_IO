import React from 'react';
import errorImg from '../assets/App-Error.png'
import { useNavigate } from 'react-router';
const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center col-span-4">
      <div className="flex justify-center my-7">
        <img src={errorImg} alt="error page" />
      </div>
      <h1 className='text-4xl font-bold my-4'>OPPS!! APP NOT FOUND</h1>
      <p className='text-xs text-zinc-500 mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
      <button onClick={()=>navigate(-1)} className='btn bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white'>Go Back !</button>
    </div>
  );
};

export default AppNotFound;
