import { Link } from 'react-router';
import { AppContext } from '../Pages/Root';
import { use } from 'react';
import AppCard from './AppCard';

const Top = () => {
    const apps = use(AppContext)
    return (
        <div className='text-center my-5 space-y-5'>
            <h1 className='text-3xl font-bold'>Trending Apps</h1>
            <p className='text-sm'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid md:grid-cols-4 p-20 gap-5'>
                {
                    apps.sort((a,b)=>b.downloads - a.downloads).slice(0,8).map((app)=><AppCard app={app} ></AppCard>)
                }
            </div>
            <Link to={'/apps'} className="btn bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white">See All</Link>
        </div>
    );
};

export default Top;