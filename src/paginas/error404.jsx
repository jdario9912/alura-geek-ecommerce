import React from 'react';
import { BiErrorAlt } from "react-icons/bi";
import Vinculo from '../componentes/vinculo';
import { VinculoModel } from '../modelos/vinculo-model'

const Error404 = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <div className='text-red-600 text-8xl'>
        <BiErrorAlt />
      </div>
      <p className='text-center'>error404! Pagina no encontrada</p>
      <Vinculo props={ new VinculoModel('Ir al inicio', '/', 'bg-blue-600 py-2 px-4 text-slate-200 mt-20')} />
    </div>
  );
}

export default Error404;
