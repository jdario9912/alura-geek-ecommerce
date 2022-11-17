import React from 'react';
import TituloPagina from '../componentes/titulo-pagina';
import Formulario from '../componentes/form-agregar-producto/formulario';


const AgregarProducto = () => {
  return (
    <div className='p-4'>
      <TituloPagina texto='Agregar un producto nuevo' />
      <Formulario />
    </div>
  );
}

export default AgregarProducto;
