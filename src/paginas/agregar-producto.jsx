import React from 'react';
import TituloPagina from '../componentes/titulo-pagina';
import { formProductoNuevo } from '../services/form-agregar-producto';
import ReactFileReader from 'react-file-reader';

const AgregarProducto = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';
  return (
    <div className='p-4'>
      <TituloPagina texto='Agregar un producto nuevo' />
      
      <form action="" className='flex flex-col gap-4'>

        <ReactFileReader fileTypes={[".png", "jpg", "jpeg"]} handleFiles={formProductoNuevo.capturarImagen} base64={true} multipleFiles={false}>
          <p>Imagen:</p>
          <div className='w-full max-w-lg h-44 border border-dashed border-slate-400 bg-slate-200'>
            <img src="" alt="" className='w-full h-full' data-img />
          </div>
        </ReactFileReader>

      
        <label htmlFor="nombre" className={ estilosLabel }>
          Nombre:
          <input type="text" id='nombre' data-nombre />
        </label>

        <label htmlFor="precio" className={ estilosLabel }>
          Precio:
          <input type="num" id='precio' data-precio />
        </label>

        <label htmlFor="descripcion" className={ estilosLabel }>
          Descripción:
          <textarea id='descripcion' data-descripcion />
        </label>

        <label htmlFor="seccion" className={ estilosLabel }>
          Sección:
          <select id='seccion' data-seccion>
            <option value="starWars">Star Wars</option>
            <option value="consolas">Consolas</option>
            <option value="diversos">Diversos</option>
          </select>
        </label>

        <button 
          type="submit"
          className='bg-blue-600 text-slate-200 p-2'
          onClick={formProductoNuevo.catchInfoProductoNuevo}
        >
          Agregar producto
        </button>

        {/* <button 
          type="submit"
          className='bg-red-600 text-slate-200 p-2'
          onClick={ formProductoNuevo.eliminarProducto('0') }
        >
          Auxiliar
        </button> */}
      </form>
    </div>
  );
}

export default AgregarProducto;
