import React from 'react';
import Producto from '../componentes/producto';
import Vinculo from '../componentes/vinculo';
import { VinculoModel } from '../modelos/vinculo-model';

const ProductosTodos = () => {

  const vinculoEstilos = 'bg-blue-600 text-slate-200 p-2';
  return (
    <div className='p-4'>
      <div className=''>
        <h3 className='text-xl font-medium mb-4'>Todos los productos</h3>
        <Vinculo props={ new VinculoModel('Agregar producto', '/agregar-producto', vinculoEstilos)} />
      </div>
      <div>
        <Producto nombre={'tazon'} precio={35627} vinculoVerMas={'#'}/>
      </div>
    </div>
  );
}

export default ProductosTodos;
