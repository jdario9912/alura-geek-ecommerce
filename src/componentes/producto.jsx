import React from 'react';
import Vinculo from './vinculo';
import { VinculoModel } from '../modelos/vinculo-model';

const Producto = ({ nombre, precio, vinculoVerMas, url }) => {
  const vinculoEstilos = 'text-blue-600 font-semibold';
  return (
    <div className='w-[48%]'>
      <img src={ url } alt='imagen producto' className='w-full h-auto' />
      <p className='mt-2'>{ nombre }</p>
      <p className='font-semibold'>${ precio }</p>
      <Vinculo props={ new VinculoModel('Ver producto', vinculoVerMas, vinculoEstilos)} />
    </div>
  );
}

export default Producto;
