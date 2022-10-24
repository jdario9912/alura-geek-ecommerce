import React from 'react';
import Vinculo from './vinculo';
import { VinculoModel } from '../modelos/vinculo-model';

const Producto = ({ nombre, precio, vinculoVerMas }) => {
  const url = "../img/epRFE_hBNjo.png";
  const vinculoEstilos = 'text-blue-600 font-semibold';
  return (
    <div className='w-[47%]'>
      {/* <div className={"bg-[url('" + url + "')] bg-center bg-cover bg-no-repeat w-1/2 h-48"}></div> */}
      <img src={ url } alt='producto' className='w-full h-auto' />
      <p className='mt-2'>{ nombre }</p>
      <p className='font-semibold'>${ precio }</p>
      <Vinculo props={ new VinculoModel('Ver producto', vinculoVerMas, vinculoEstilos)} />
    </div>
  );
}

export default Producto;
