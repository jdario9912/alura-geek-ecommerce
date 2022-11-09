import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const StarWarsSeccion = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/starWars')
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
              vinculoVerMas={`/producto-descripcion/${personaje.seccion}/${personaje.id}/${personaje.seccion}`} 
              url={personaje.imgBase64} 
            />
          )
        }
      </div>
    </section>
  );
}

export default StarWarsSeccion;
