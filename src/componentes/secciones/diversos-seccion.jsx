import React, { useState, useEffect } from 'react';
import { urlApi } from '../../config-api/config-api';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const DiversosSeccion = () => {
  const [diversos, setDiversos] = useState([]);
  const seccion = 'diversos';

  useEffect(() => {
    fetch(urlApi + seccion)
      .then(response => response.json())
      .then(diversosResponse => {
        setDiversos(diversosResponse);
      }) 
  }, []);

  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='Diversos' />
      <div className='flex flex-wrap gap-2'>
        {
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
