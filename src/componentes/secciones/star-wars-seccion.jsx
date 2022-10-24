import React, { useEffect, useState } from 'react';
import EncabezadoSeccion from '../encabezado-seccion';
import Producto from '../producto';


const StarWarsSeccion = () => {
  const [consolas, setConsolas] = useState([]);

  useEffect(() => {
    fetch('https://db-alura-geek-ecommerce.herokuapp.com/consolas')
      .then(response => response.json())
      .then(consolasResponse => {
        setConsolas(consolasResponse);
      }) 
  }, []);

  return (
    <section className='p-4'>
      <EncabezadoSeccion titulo='StarWars' />
      {
        consolas.map((consola) => 
          <Producto nombre={consola.nombre} precio={consola.precio} key={consola.id} vinculoVerMas={'#'} />
        )
      }
    </section>
  );
}

export default StarWarsSeccion;
