import React from 'react';

const EditarProducto = () => {
  return (
    <div>
      <form action="" className='border border-amber-500'>
        
        <label htmlFor="">
          Id:
          <input type="num" disabled='true' id='id' />
        </label>

        <label htmlFor="nombre">
          Nombre:
          <input type="text" id='nombre' />
        </label>

        <label htmlFor="precio">
          Precio:
          <input type="num" id='precio' />
        </label>

        <label htmlFor="descripcion">
          Descripción:
          <textarea id='descripcion'></textarea>
        </label>

        <label htmlFor="seccion">
          Sección:
          <select id='seccion'>
            <option selected value="star wars">Star Wars</option>
            <option value="consolas">Consolas</option>
            <option value="diversos">Diversos</option>
          </select>
        </label>

        <label htmlFor="imagen">
          Imagen:
          <input type="file" id='imagen' />
        </label>

        <label htmlFor="fecha">
          Fecha:
          <input type="text" id='fecha' />
        </label>
      </form>
    </div>
  );
}

export default EditarProducto;
