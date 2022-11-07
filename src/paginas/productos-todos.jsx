import React from 'react';
import ProductosPorSeccion from '../componentes/productos-por-seccion';
import Vinculo from '../componentes/vinculo';
import { VinculoModel } from '../modelos/vinculo-model';

const ProductosTodos = () => {
  const vinculoEstilos = 'bg-blue-600 text-slate-200 p-2';
  return (
    <div className='p-4 w-full'>
      <div className='mb-4'>
        <h3 className='text-xl font-medium mb-4'>Todos los productos</h3>
        <Vinculo props={ new VinculoModel('Agregar producto', '/agregar-producto', vinculoEstilos)} />
      </div>
      <ProductosPorSeccion seccion='starWars' />
      <ProductosPorSeccion seccion='consolas' />
      <ProductosPorSeccion seccion='diversos' />
    </div>
  );
}

export default ProductosTodos;
