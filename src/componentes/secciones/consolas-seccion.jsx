import React, { useState, useEffect } from 'react';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const ConsolasSeccion = () => {
  const [consolas, setConsolas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/consolas')
      .then(response => response.json())
      .then(consolasResponse => {
        setConsolas(consolasResponse);
      }) 
  }, []);

  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='Consolas' />
      {
        consolas.map((personaje) => 
          <Producto 
            nombre={personaje.nombre} 
            precio={personaje.precio} 
            key={personaje.id} 
            vinculoVerMas={'#'} 
            url={personaje.imgBase64} 
          />
        )
      }
    </section>
  );
}

export default ConsolasSeccion;
