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
    <section className='p-4' id='consolas'>
      <EncabezadoSeccion titulo='Consolas' />
      <div className='flex flex-wrap gap-2'>
        {
          consolas.map((consola) => 
            <Producto 
              nombre={consola.nombre} 
              precio={consola.precio} 
              key={consola.id} 
              vinculoVerMas={`/producto-descripcion/${consola.seccion}/${consola.id}`} 
              url={consola.imgBase64} 
            />
          )
        }
      </div>
    </section>
  );
}

export default ConsolasSeccion;
