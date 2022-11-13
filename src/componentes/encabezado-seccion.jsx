import React from 'react';
import { VinculoModel } from '../modelos/vinculo-model';
import Vinculo from './vinculo';

const EncabezadoSeccion = ({ titulo }) => {
  const estilos = 'text-blue-600 after:content-["→"]';
  return (
    <div className='flex justify-between mb-4'>
      <h3 className='text-2xl font-medium'>{ titulo }</h3>
      <Vinculo props={ new VinculoModel('ver todo', '/productos-todos', estilos)} />
    </div>
  );
}

export default EncabezadoSeccion;
