import { v4 as uuidv4 } from 'uuid';

const catchInfoUsuario = (e) => {
  e.preventDefault();
  const inputUsuario = document.querySelector('[data-usuario]');
  const inputPassword = document.querySelector('[data-password]');
  
  const valueCampoUsuario = inputUsuario.value;
  const valueCampoPass = inputPassword.value;

  validaCamposLogin(valueCampoUsuario, valueCampoPass) ?
    alert('Aca va el codigo que loguea el usuario') :
    alert('Debes completar el formulario')
  ;

  inputUsuario.value = '';
  inputPassword.value = '';
}

const validaCamposLogin = (valueCampoUsuario, valueCampoPass) => {
  if(valueCampoUsuario !== ''&& valueCampoPass !== '')
    return true;
  else
    return false;
}
;

// Esta funcion se utilizo para registrar un usuario por defecto en la API
// NO DEBE SER UTILIZADA!
const crearUsuario = (usuario, pass, fecha) => {
  return fetch("https://db-alura-geek-ecommerce.herokuapp.com/usuarios", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({id:uuidv4(), usuario, pass, fecha})
  });
};

// Esta funcion se utilizo para borrar ocacionalmente algun usuario registrado
// NO DEBE SER UTILIZADA!
const eliminarUsuario = (id) =>{
  return fetch(`https://db-alura-geek-ecommerce.herokuapp.com/usuarios/${id}`, {
      method: 'DELETE',
  });
};

const auxOp = (e) => {
  e.preventDefault();
  // const campoUsuario = document.querySelector('[data-usuario]');
  // const campoPassword = document.querySelector('[data-password]');
  
  // const valueCampoUsuario = campoUsuario.value;
  // const valueCampoPass = campoPassword.value;

  localStorage.removeItem('usuario');
  localStorage.removeItem('pass');
}

export const formLogin = {
  catchInfoUsuario,
  eliminarUsuario,
  crearUsuario,
  auxOp,
}