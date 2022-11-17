import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../componentes/form-editar-producto/formulario';
import TituloPagina from '../componentes/titulo-pagina';

export const ProductoContext = createContext();

const EditarProducto = () => {
  const [producto, setProducto] = useState({});
  const { seccion, id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/${seccion}/${id}`)
      .then(res => res.json())
      .then(resProducto => setProducto(resProducto))
      .catch(e => alert(e))
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <TituloPagina texto='Editar producto' />
      <ProductoContext.Provider value={producto}>
        <Formulario />
      </ProductoContext.Provider>
    </div>
  );
}

export default EditarProducto;
