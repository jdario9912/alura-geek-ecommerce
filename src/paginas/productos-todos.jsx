import React from 'react';
import ProductosTodasSecciones from '../componentes/productos-todas-secciones';
import Vinculo from '../componentes/vinculo';
import { VinculoModel } from '../modelos/vinculo-model';

const ProductosTodos = () => {
  const vinculoEstilos = 'bg-blue-600 text-slate-200 p-2 lg:h-12';
  return (
    <div className='p-4 w-full lg:px-24'>
      <div className='mb-4 lg:flex justify-between'>
        <h3 className='text-xl font-medium mb-4 lg:text-4xl'>Todos los productos</h3>
        <Vinculo props={ new VinculoModel('Agregar producto', '/agregar-producto', vinculoEstilos)} />
      </div>
      <ProductosTodasSecciones />
    </div>
  );
}

export default ProductosTodos;
