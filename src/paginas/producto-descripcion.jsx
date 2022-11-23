import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductoSeleccionado from '../componentes/producto-seleccionado';
import ProductosSimilares from '../componentes/productos-similares';
import { urlApi } from '../config-api/config-api';

const ProductoDescripcion = () => {
  const {id, seccion} = useParams();
  const [prodSeleccionado, setProdSeleccionado] = useState({})
  useEffect(() => {
    fetch(urlApi + seccion +'/'+ id)
      .then(res => res.json())
      .then(producto => setProdSeleccionado(producto))
      .catch(e => alert(e))
  }, []);
  return (
    <div className='lg:px-24'>
      <ProductoSeleccionado 
        src={prodSeleccionado.imgBase64} 
        nombre={prodSeleccionado.nombre} 
        precio={prodSeleccionado.precio} 
        descripcion={prodSeleccionado.descripcion}
      />
      <ProductosSimilares />
    </div>
  );
}

export default ProductoDescripcion;
