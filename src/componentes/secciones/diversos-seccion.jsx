import React, { useState, useEffect } from 'react';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const DiversosSeccion = () => {
  const [diversos, setDiversos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/diversos')
      .then(response => response.json())
      .then(diversosResponse => {
        setDiversos(diversosResponse);
      }) 
  }, []);

  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='Diversos' />
      {
        diversos.map((diverso) => 
          <Producto 
            nombre={diverso.nombre} 
            precio={diverso.precio} 
            key={diverso.id} 
            vinculoVerMas={'#'} 
            url={diverso.imgBase64} 
          />
        )
      }
    </section>
  );
}

export default DiversosSeccion;
