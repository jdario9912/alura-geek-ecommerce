import React from 'react';
import Vinculo from './vinculo';
import { VinculoModel } from '../modelos/vinculo-model';

const ProductoSeleccionado = ({ src, nombre, precio, descripcion, seccion, id}) => {
  const estilosVinculo = 'bg-blue-600 text-slate-200 py-1 px-2 w-36 text-center self-end';
  return (
    <div className='flex flex-col gap-2'>
      <Vinculo props={ new VinculoModel('Ver todos', `/productos-todos`, estilosVinculo)} />
      <Vinculo props={ new VinculoModel('Editar producto', `/editar-producto/${seccion}/${id}`, estilosVinculo)} />
      <img src={ src } alt="imagen producto seleccionado" className='h-64 w-auto mx-auto'/>
      <div className='p-4'>
        <p className='text-3xl'>{ nombre }</p>
        <p className='font-black text-lg'>${ precio }</p>
        <p className='font-light'>{ descripcion }</p>
      </div>
    </div>
  );
}

export default ProductoSeleccionado;
