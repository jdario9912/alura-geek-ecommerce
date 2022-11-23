import React from 'react';
import { AiFillAlert } from "react-icons/ai";

const EnDesarrollo = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-4xl gap-4'>
      <div className='text-8xl text-orange-600'>
        <AiFillAlert />
      </div>
      <p className='text-center'>Página en desarrollo...</p>
    </div>
  );
}

export default EnDesarrollo;
