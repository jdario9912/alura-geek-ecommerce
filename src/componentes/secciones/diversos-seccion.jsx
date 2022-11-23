import React, { useState, useEffect } from 'react';
import { urlApi } from '../../config-api/config-api';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';
import ClipLoader from 'react-spinners/ClipLoader';
import { spinnerSettings } from '../../services/spinners';


const DiversosSeccion = () => {
  const [diversos, setDiversos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const seccion = 'diversos';

  useEffect(() => {
    fetch(urlApi + seccion)
      .then(response => response.json())
      .then(diversosResponse => {
        setDiversos(diversosResponse);
        setIsLoading(false);
      }) 
  }, []);

  return (
    <section className='p-4 lg:px-24'>
      <EncabezadoSeccion titulo='Diversos' />
      <div className='flex flex-wrap gap-2'>
        {
          isLoading ?
          <div className={spinnerSettings.classContainer}><ClipLoader color={spinnerSettings.color} size={spinnerSettings.size} /></div> :
            diversos.map((diverso) => 
              <Producto 
                nombre={diverso.nombre} 
                precio={diverso.precio} 
                key={diverso.id} 
                vinculoVerMas={`/producto-descripcion/${diverso.seccion}/${diverso.id}`} 
                url={diverso.imgBase64} 
              />
            )
        }
      </div>
    </section>
  );
}

export default DiversosSeccion;
