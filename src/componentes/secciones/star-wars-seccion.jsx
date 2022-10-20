import React from 'react';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';

const StarWarsSeccion = () => {
  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='StarWars' />
      <div className='flex flex-wrap gap-4'>
        <Producto 
          nombre='Algun nombre' 
          precio={100} 
          vinculoVerMas='/producto-descripcion'
          url='https://github.com/jdario9912/e-commers/blob/gh-pages/assets/img/todos/productos/epRFE_hBNjo.png?raw=true'
        />
        <Producto 
          nombre='Algun nombre' 
          precio={100} 
          vinculoVerMas='/producto-descripcion'
          url='https://github.com/jdario9912/e-commers/blob/gh-pages/assets/img/todos/productos/epRFE_hBNjo.png?raw=true'
        />
        <Producto 
          nombre='Algun nombre' 
          precio={100} 
          vinculoVerMas='/producto-descripcion'
          url='https://github.com/jdario9912/e-commers/blob/gh-pages/assets/img/todos/productos/epRFE_hBNjo.png?raw=true'
        />
      </div>
    </section>
  );
}

export default StarWarsSeccion;
