import React from 'react';

const ProductoSeleccionado = ({ src, nombre, precio, descripcion}) => {
  return (
    <div className=''>
      <img src={ src } alt="imagen producto seleccionado" className='h-64 w-full'/>
      <div className='p-4'>
        <p className='text-3xl'>{ nombre }</p>
        <p className='font-black text-lg'>${ precio }</p>
        <p className='font-light'>{ descripcion }</p>
      </div>
    </div>
  );
}

export default ProductoSeleccionado;
