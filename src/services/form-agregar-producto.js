import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { urlApi } from '../config-api/config-api';

const capturarImagen = (files) => {
  const tagImg = document.querySelector('[data-img]');

  tagImg.src = files.base64;
}

const registrarProducto = (imgBase64, nombre, precio, descripcion, seccion, fecha) => {
  return fetch('http://localhost:3000' + seccion, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        id: {id:uuidv4()}, 
        imgBase64: imgBase64, 
        nombre: nombre, 
        preico: precio, 
        descripcion: descripcion,
        seccion: seccion,
        fecha: fecha
      })
  })
  .then(window.location.href = '/confirma-producto-agregado');
};

const catchInfoProductoNuevo = (e) => {
  e.preventDefault();

  const imgBase64 = document.querySelector('[data-img]').src;
  const nombre = document.querySelector('[data="nombre"]').value;
  const precio = document.querySelector('[data="precio"]').value;
  const descripcion = document.querySelector('[data-descripcion]').value;
  const seccion = document.querySelector('[data-seccion]').value;
  const fecha = moment().format('L');
  
  registrarProducto(imgBase64, nombre, precio, descripcion, seccion, fecha);
  
  const cleanimgBase64 = document.querySelector('[data-img]'),
        cleannombre = document.querySelector('[data="nombre"]'),
        cleanprecio = document.querySelector('[data="precio"]'),
        cleandescripcion = document.querySelector('[data-descripcion]'),
        cleanseccion = document.querySelector('[data-seccion]');

  cleanimgBase64.src = null;
  cleannombre.value = '';
  cleanprecio.value = '';
  cleandescripcion.value = '';
  cleanseccion.value = '';
};

// Esta funcion se utilizo para borrar ocacionalmente algun usuario registrado
// NO DEBE SER UTILIZADA!
const eliminarProducto = (id) =>{
  return fetch(`https://db-alura-geek-ecommerce.herokuapp.com/consolas/${id}`, {
      method: 'DELETE',
  });
};

export const formProductoNuevo = {
  catchInfoProductoNuevo,
  capturarImagen,
  eliminarProducto,
};