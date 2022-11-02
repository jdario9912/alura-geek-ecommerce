import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const capturarImagen = (files) => {
  const tagImg = document.querySelector('[data-img]');

  tagImg.src = files.base64;
}

const registrarProducto = (imgBase64, nombre, precio, descripcion, seccion, fecha) => {
  return fetch(`https://db-alura-geek-ecommerce.herokuapp.com/${seccion}`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id:uuidv4(), 
        imgBase64, 
        nombre, 
        precio, 
        descripcion, 
        fecha
      })
  });
};

const catchInfoProductoNuevo = (e) => {
  e.preventDefault();

  const imgBase64 = document.querySelector('[data-img]').src;
  const nombre = document.querySelector('[data-nombre]').value;
  const precio = document.querySelector('[data-precio]').value;
  const descripcion = document.querySelector('[data-descripcion]').value;
  const seccion = document.querySelector('[data-seccion]').value;
  const fecha = moment().format('L');
  
  registrarProducto(imgBase64, nombre, precio, descripcion, seccion, fecha)
  
  imgBase64 = null;
  nombre = '';
  precio = '';
  descripcion = '';
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