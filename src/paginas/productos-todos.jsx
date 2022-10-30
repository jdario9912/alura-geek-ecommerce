import React from 'react';
import Producto from '../componentes/producto';

const ProductosTodos = () => {
  return (
    <div className='p-4'>
      <h3 className='text-xl font-medium mb-4'>Todos los productos</h3>
      <Producto nombre={'tazon'} precio={35627} vinculoVerMas={'#'}/>
    </div>
  );
}

export default ProductosTodos;
