import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import Vinculo from '../componentes/vinculo';
import {VinculoModel} from '../modelos/vinculo-model';

const ConfirmaProductoAgregado = () => {
  const estilosVinculo = 'bg-blue-600 text-slate-200 py-2 px-4';
  return (
    <div className='flex justify-center items-center flex-col h-[calc(100vh/2)] gap-6'>
      <div className='text-green-800 text-4xl font-bold p-3 rounded-full border border-dashed border-gray-600'>
        <AiOutlineCheck />
      </div>
      <p>Producto agregado exitosamente!</p>
      <Vinculo props={new VinculoModel('Ok', '/productos-todos', estilosVinculo)} />
    </div>
  );
}

export default ConfirmaProductoAgregado;
