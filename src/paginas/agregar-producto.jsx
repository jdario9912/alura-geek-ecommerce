import React from 'react';
import TituloPagina from '../componentes/titulo-pagina';
import Formulario from '../componentes/form-agregar-prducto/formulario';


const AgregarProducto = () => {
  return (
    <div className='p-4'>
      <TituloPagina texto='Agregar un producto nuevo' />
      <Formulario />

        {/* <button 
          type="submit"
          className='bg-red-600 text-slate-200 p-2'
          onClick={ formProductoNuevo.eliminarProducto('0') }
        >
          Auxiliar
        </button> */}
      
    </div>
  );
}

export default AgregarProducto;
