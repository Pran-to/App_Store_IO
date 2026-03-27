import React from 'react';
import errorImg from '../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center' >
            <div className='flex justify-center my-7'>
                <img src={errorImg} alt="error page" />
            </div>
            <button onClick={()=>navigate(-1)} className='btn bg-fuchsia-700 text-white'>Go Back</button>

        </div>
    );
};

export default ErrorPage;