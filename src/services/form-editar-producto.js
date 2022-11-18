import moment from "moment";
import { urlApi } from "../config-api/config-api";

const capturarImagen = (files) => {
  const tagImg = document.querySelector('[data-img]');

  tagImg.src = files.base64;
}

const actualizarProducto = (e) => {
  e.preventDefault();
  
  const id = document.querySelector('[data-id]').value;
  const imgBase64 = document.querySelector('[data-img]').src;
  const nombre = document.querySelector('[data="nombre"]').value;
  const precio = document.querySelector('[data="precio"]').value;
  const seccion = document.querySelector('[data="seccion"]').value;
  const descripcion = document.querySelector('[data="descripcion"]').value;
  const fecha = document.querySelector('[data="fecha"]').value;

  registrarProductoActualizado(id, imgBase64, nombre, precio, seccion, descripcion, fecha);
}

const registrarProductoActualizado = (id, imgBase64, nombre, precio, seccion, descripcion, fecha) => {
  const editado = moment().format('L');
  
  return fetch(urlApi + seccion + '/' + id , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({imgBase64, nombre, precio, seccion, descripcion, fecha, editado })
    });
}

export const formEditarProducto = {
  capturarImagen,
  actualizarProducto,
}