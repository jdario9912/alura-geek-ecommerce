import React, { useState, useEffect} from 'react';
import ProductoEditable from './producto-editable';
import { urlApi } from '../config-api/config-api';
import { spinnerSettings } from '../services/spinners';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductosTodasSecciones = () => {
  const [starWars, setStarWars] = useState([]);
  const [consolas, setConsolas] = useState([]);
  const [diversos, setDiversos] = useState([]);
  const [starWarsLoading, setStarWarsLoading] = useState(true);
  const [consolasLoading, setConsolasLoading] = useState(true);
  const [diversosLoading, setDiversosLoading] = useState(true);

  useEffect(() => {
    fetch(urlApi + 'starWars')
      .then(res => res.json())
      .then(prodSW => {
        setStarWars(prodSW); 
        setStarWarsLoading(false);
      })
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    fetch(urlApi + 'consolas')
      .then(res => res.json())
      .then(prodC => {
        setConsolas(prodC);
        setConsolasLoading(false);
      })
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    fetch(urlApi + 'diversos')
      .then(res => res.json())
      .then(prodD => {
        setDiversos(prodD);
        setDiversosLoading(false);
      })
      .catch(e => console.log(e))
  }, []);

  return (
      <div className='flex flex-wrap gap-2 w-full'>
      {
        starWarsLoading?
          <div className={spinnerSettings.classContainer}><ClipLoader color={spinnerSettings.color} size={spinnerSettings.size} /></div> :
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
        consolasLoading?
          <div className={spinnerSettings.classContainer}><ClipLoader color={spinnerSettings.color} size={spinnerSettings.size} /></div> :
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
        diversosLoading?
          <div className={spinnerSettings.classContainer}><ClipLoader color={spinnerSettings.color} size={spinnerSettings.size} /></div> :
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
