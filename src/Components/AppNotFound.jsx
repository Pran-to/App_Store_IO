import React from 'react';
import errorImg from '../assets/App-Error.png'
const AppNotFound = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center my-7">
        <img src={errorImg} alt="error page" />
      </div>
    </div>
  );
};

export default AppNotFound;
