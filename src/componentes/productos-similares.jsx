import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlApi } from '../config-api/config-api';
import Producto from './producto';

const ProductosSimilares = () => {
  const [similares, setSimilares] = useState([]);
  const { seccion, id } = useParams();

  useEffect(() => {
    fetch(urlApi + seccion)
      .then(res => res.json())
      .then(sim => setSimilares(sim))
      .catch(e => alert(e))
  }, []);
  return (
    <div className='p-4'>
      <h3 className='capitalize text-2xl mb-4'>productos similares</h3>
      <div className='flex flex-wrap gap-2'>
        {
          similares.map(prodSimilar =>
            (prodSimilar.id !== id) ?
              <Producto 
                key={ id }
                nombre={prodSimilar.nombre}  
                precio={prodSimilar.precio}
                url={prodSimilar.imgBase64}
                vinculoVerMas={`/producto-descripcion/${prodSimilar.seccion}/${prodSimilar.id}`}
              /> :
              ''
          )
        }
      </div>
    </div>
  );
}

export default ProductosSimilares;
