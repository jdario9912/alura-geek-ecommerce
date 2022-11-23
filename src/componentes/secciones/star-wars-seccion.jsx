import React, { useEffect, useState } from 'react';
import { urlApi } from '../../config-api/config-api';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';
import ClipLoader from 'react-spinners/ClipLoader';
import { spinnerSettings } from '../../services/spinners';


const StarWarsSeccion = () => {
  const [personajes, setPersonajes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const seccion = 'starWars';

  useEffect(() => {
    fetch(urlApi + seccion)
      .then(response => response.json())
      .then(personajesResponse => {
        setPersonajes(personajesResponse);
        setIsLoading(false);
      }) 
  }, []);

  return (
    <section className='p-4 lg:px-24'>
      <EncabezadoSeccion titulo='StarWars' />
      <div className='flex flex-wrap gap-2'>
        {
          isLoading ?
            <div className={spinnerSettings.classContainer}><ClipLoader color={spinnerSettings.color} size={spinnerSettings.size} /></div> :
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
