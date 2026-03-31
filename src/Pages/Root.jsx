import React, { createContext } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../Components/Footer';
 import { ToastContainer} from 'react-toastify';

  export   const  AppContext = createContext()
const Root = () => {
    const data = useLoaderData()

    return (
        <div>
          <ToastContainer />
           <AppContext.Provider value={data}>
             <Navbar/>
            <Outlet/>
            <Footer/>
           </AppContext.Provider>
        </div>
    );
};

export default Root;