import React from 'react';
import Vinculo from './vinculo';
import { VinculoModel } from '../modelos/vinculo-model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProductoEditable = ({ imgBase64, nombre, precio, seccion, id }) => {
  const vinculoEstilos = 'text-blue-600';
  return (
    <span className='w-[48%]'>
      <div className='relative'>
        <img src={ imgBase64 } alt='imagen producto' className='w-full h-auto' />
        <div className='flex text-slate-200 absolute top-3 right-3 gap-2 text-3xl'>
          <Vinculo props={ new VinculoModel(<AiFillEdit />, `/editar-producto/${seccion}/${id}`, '')} />
          <Vinculo props={ new VinculoModel(<AiFillDelete />, `/eliminar-producto/${seccion}/${id}`, '')} />
        </div>
      </div>
      <p className='mt-2'>{ nombre }</p>
      <p className='font-semibold'>${ precio }</p>
      <Vinculo props={ new VinculoModel('Ver producto', `/producto-descripcion/${seccion}/${id}/${seccion}`, vinculoEstilos)} />
    </span>
  );
}

export default ProductoEditable;