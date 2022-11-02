import React, { useEffect, useState } from 'react';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const StarWarsSeccion = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://db-alura-geek-ecommerce.herokuapp.com/starWars')
      .then(response => response.json())
      .then(personajesResponse => {
        setPersonajes(personajesResponse);
      }) 
  }, []);

  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='StarWars' />
      {
        personajes.map((personaje) => 
          <Producto nombre={personaje.nombre} precio={personaje.precio} key={personaje.id} vinculoVerMas={'#'} url={personaje.imgBase64} />
        )
      }
    </section>
  );
}

export default StarWarsSeccion;
