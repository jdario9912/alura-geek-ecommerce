import React, { useState, useEffect} from 'react';
import ProductoEditable from './producto-editable';

const ProductosPorSeccion = ({ seccion }) => {
  const [productosSeccion, setProductosSeccion] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${ seccion }`)
      .then(res => res.json())
      .then(prodSW => {
        setProductosSeccion(prodSW);
      });
  }, []);
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      {
        productosSeccion.map(producto => 
          <ProductoEditable 
            imgBase64 = {producto.imgBase64}
            nombre = {producto.nombre}
            precio = {producto.precio}
            key = {producto.id}
            id = {producto.id}
            seccion = {seccion}
          />
        )
      }
    </div>
  );
}

export default ProductosPorSeccion;
