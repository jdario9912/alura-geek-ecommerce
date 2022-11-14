import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Producto from '../componentes/producto';

const ProductosPorSeccion = () => {
  const { seccion } = useParams();
  const [productosSeccion, setProductosSeccion] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/${seccion}`)
      .then(res => res.json())
      .then(productos => setProductosSeccion(productos))
      .catch(e => console.log(e));
  }, []);
  return (
    <div className='p-4'>
      <h3 className='text-2xl font-medium capitalize'>{ seccion }</h3>
      <div className='flex flex-wrap gap-2'>
        {
          productosSeccion.map(({nombre, precio, imgBase64, id }) =>
            <Producto 
              nombre={nombre} 
              precio={precio} 
              url={imgBase64} 
              vinculoVerMas={`/producto-descripcion/${seccion}/${id}/${seccion}`} />  
          )
        }
      </div>
    </div>
  );
}

export default ProductosPorSeccion;
