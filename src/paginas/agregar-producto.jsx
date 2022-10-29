import React from 'react';

const AgregarProducto = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form action="" className='flex flex-col gap-4'>

        <label htmlFor="imagen" className={ estilosLabel }>
          Imagen:
          <input type="file" id='imagen' />
        </label>
        
        <input type="num" disabled='true' id='id' value={4} hidden='true' />

        <label htmlFor="nombre" className={ estilosLabel }>
          Nombre:
          <input type="text" id='nombre' />
        </label>

        <label htmlFor="precio" className={ estilosLabel }>
          Precio:
          <input type="num" id='precio' />
        </label>

        <label htmlFor="descripcion" className={ estilosLabel }>
          Descripción:
          <textarea id='descripcion' />
        </label>

        <label htmlFor="seccion" className={ estilosLabel }>
          Sección:
          <select id='seccion'>
            <option selected value="star wars">Star Wars</option>
            <option value="consolas">Consolas</option>
            <option value="diversos">Diversos</option>
          </select>
        </label>

        <label htmlFor="fecha" className={ estilosLabel }>
          Fecha:
          <input type="text" id='fecha' disabled={ true } value='21-10-22' />
        </label>

        <button 
          type="submit"
          className='bg-blue-600 text-slate-200 p-2'
        >
          Agregar producto
        </button>
      </form>
    </div>
  );
}

export default AgregarProducto;
