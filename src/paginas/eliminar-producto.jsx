import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlApi } from '../config-api/config-api';

const EliminarProducto = () => {
  const {id, seccion} = useParams();
  const [articulo, setArticulo] = useState({});
  useEffect(() => {
    fetch(`${urlApi}${seccion}/${id}`)
      .then(res => res.json())
      .then(res => setArticulo(res))
      .catch(e => console.log(e))
  }, []);

  const confirmaEliminarProducto = () => {
    return fetch(`${urlApi}${seccion}/${id}`, {
        method: 'DELETE',
    })
    .then(window.location.href ='https://alura-geek-ecommerce-six.vercel.app/productos-todos')
    // .catch(alert('Ocurrio un error inesperado. No se pudo eliminar'));
  }

  return (
    <div className='flex flex-col items-center h-[calc(100vh/2)] justify-center gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <img 
          src={articulo.imgBase64} 
          alt={`Imagen de $\{nombre\}`} 
          className='w-16 h-auto'
        />
        <p className='font-bold'>{articulo.nombre}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p>¿Está seguro que quiere eliminar este producto?</p>
        <div className='flex justify-center gap-8'>
          <span className='text-green-600 hover:cursor-pointer' onClick={confirmaEliminarProducto}>Si</span>
          <span className='text-red-600 hover:cursor-pointer'>No</span>
        </div>
      </div>
    </div>
  );
}

export default EliminarProducto;
