import React, { useState, useEffect } from 'react';
import { urlApi } from '../../config-api/config-api';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';

const ConsolasSeccion = () => {
  const [consolas, setConsolas] = useState([]);
  const seccion = 'consolas';

  useEffect(() => {
    fetch(urlApi + seccion)
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
