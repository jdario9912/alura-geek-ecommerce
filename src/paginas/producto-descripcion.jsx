import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductoSeleccionado from '../componentes/producto-seleccionado';

const ProductoDescripcion = () => {
  const {id, seccion} = useParams();
  const [prodSeleccionado, setProdSeleccionado] = useState({})
  useEffect(() => {
    fetch(`http://localhost:3000/${seccion}/${id}`)
      .then(res => res.json())
      .then(producto => setProdSeleccionado(producto))
  }, []);
  return (
    <div>
      <ProductoSeleccionado 
        src={prodSeleccionado.imgBase64} 
        nombre={prodSeleccionado.nombre} 
        precio={prodSeleccionado.precio} 
        descripcion={prodSeleccionado.descripcion} 
      />
    </div>
  );
}

export default ProductoDescripcion;
