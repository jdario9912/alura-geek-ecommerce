import React, { useState, useEffect } from 'react';
import { urlApi } from '../../config-api/config-api';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';
import ClipLoader from 'react-spinners/ClipLoader';
import { spinnerSettings } from '../../services/spinners';

const ConsolasSeccion = () => {
  const [consolas, setConsolas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const seccion = 'consolas';

  useEffect(() => {
    fetch(urlApi + seccion)
      .then(response => response.json())
      .then(consolasResponse => {
        setConsolas(consolasResponse);
        setIsLoading(false);
      }) 
  }, []);

  return (
    <section className='p-4 lg:px-24' id='consolas'>
      <EncabezadoSeccion titulo='Consolas' />
      <div className='flex flex-wrap gap-2'>
        {
          isLoading ?
          <div className={spinnerSettings.classContainer}><ClipLoader color={spinnerSettings.color} size={spinnerSettings.size} /></div> :
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
