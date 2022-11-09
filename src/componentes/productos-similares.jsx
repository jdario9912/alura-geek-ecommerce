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
    <div className='flex flex-wrap p-4 gap-2'>
      {
        similares.map(prodSimilar =>
          (prodSimilar.id != id) ?
          <Producto 
            nombre={prodSimilar.nombre}  
            precio={prodSimilar.precio}
            url={prodSimilar.imgBase64}
            vinculoVerMas={`/producto-descripcion/${prodSimilar.seccion}/${prodSimilar.id}/${prodSimilar.seccion}`}
          /> :
          ''
        )
      }
    </div>
  );
}

export default ProductosSimilares;
