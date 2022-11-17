import React from 'react';
import Vinculo from './vinculo';
import { VinculoModel } from '../modelos/vinculo-model';
import { useParams } from 'react-router-dom';

const ProductoSeleccionado = ({ src, nombre, precio, descripcion}) => {
  const estilosVinculo = 'border border-blue-600 rounded text-blue-600 py-1 px-4 text-center text-xs';
  const { seccion, id } = useParams();
  return (
    <div className='flex flex-col gap-2'>
      <img src={ src } alt="imagen producto seleccionado" className='h-64 w-auto mx-auto'/>
      <div className='px-4 flex justify-end gap-2'>
        <Vinculo props={ new VinculoModel('Ver todos', '/productos-todos', estilosVinculo)} />
        <Vinculo props={ new VinculoModel('Editar', `/editar-producto/${seccion}/${id}`, estilosVinculo)} />
      </div>
      <div className='px-4'>
        <p className='text-3xl'>{ nombre }</p>
        <p className='font-black text-lg'>${ precio }</p>
        <p className='font-light'>{ descripcion }</p>
      </div>
    </div>
  );
}

export default ProductoSeleccionado;
