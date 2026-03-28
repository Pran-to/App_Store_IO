import React from 'react';
import { Link } from 'react-router';

const Top = () => {
    return (
        <div className='text-center my-5 space-y-5'>
            <h1 className='text-3xl font-bold'>Trending Apps</h1>
            <p className='text-sm'>Explore All Trending Apps on the Market developed by us</p>
            <Link to={'/apps'} className="btn bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white">See All</Link>
        </div>
    );
};

export default Top;