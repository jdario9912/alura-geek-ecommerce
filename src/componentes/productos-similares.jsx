import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from './producto';

const ProductosSimilares = () => {
  const [similares, setSimilares] = useState([]);
  const { seccion, id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/${seccion}`)
      .then(res => res.json())
      .then(sim => setSimilares(sim))
      .catch(e => console.log(e))
  }, []);
  return (
    <div className='p-4'>
      <h3 className='capitalize text-2xl mb-4'>productos similares</h3>
      <div>
      <div className='flex flex-wrap gap-2'>
        {
          similares.map(prodSimilar =>
            (prodSimilar.id !== id) ?
            <Producto 
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
    </div>
  );
}

export default ProductosSimilares;
