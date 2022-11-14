import React, { useState, useEffect} from 'react';
import ProductoEditable from './producto-editable';

const ProductosTodasSecciones = () => {
  const [starWars, setStarWars] = useState([]);
  const [consolas, setConsolas] = useState([]);
  const [diversos, setDiversos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/starWars')
      .then(res => res.json())
      .then(prodSW => setStarWars(prodSW))
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/consolas`)
      .then(res => res.json())
      .then(prodC => setConsolas(prodC))
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/diversos`)
      .then(res => res.json())
      .then(prodD => setDiversos(prodD))
      .catch(e => console.log(e))
  }, []);

  return (
      <div className='flex flex-wrap gap-2 w-full'>
      {
        starWars.map(producto => 
          <ProductoEditable 
            imgBase64 = {producto.imgBase64}
            nombre = {producto.nombre}
            precio = {producto.precio}
            key = {producto.id}
            id = {producto.id}
            seccion = {producto.seccion}
          />
        )
      }
      {
        consolas.map(producto => 
          <ProductoEditable 
            imgBase64 = {producto.imgBase64}
            nombre = {producto.nombre}
            precio = {producto.precio}
            key = {producto.id}
            id = {producto.id}
            seccion = {producto.seccion}
          />
        )
      }
      {
        diversos.map(producto => 
          <ProductoEditable 
            imgBase64 = {producto.imgBase64}
            nombre = {producto.nombre}
            precio = {producto.precio}
            key = {producto.id}
            id = {producto.id}
            seccion = {producto.seccion}
          />
        )
      }
    </div>
  )
}

export default ProductosTodasSecciones;