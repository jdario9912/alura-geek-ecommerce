import React, { useEffect, useState } from 'react';
import { urlApi } from '../../config-api/config-api';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const StarWarsSeccion = () => {
  const [personajes, setPersonajes] = useState([]);
  const seccion = 'starWars';

  useEffect(() => {
    fetch(urlApi + seccion)
      .then(response => response.json())
      .then(personajesResponse => {
        setPersonajes(personajesResponse);
      }) 
  }, []);

  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='StarWars' />
      <div className='flex flex-wrap gap-2'>
        {
          personajes.map((personaje) => 
            <Producto 
              nombre={personaje.nombre} 
              precio={personaje.precio} 
              key={personaje.id} 
              vinculoVerMas={`/producto-descripcion/${personaje.seccion}/${personaje.id}`} 
              url={personaje.imgBase64} 
            />
          )
        }
      </div>
    </section>
  );
}

export default StarWarsSeccion;
