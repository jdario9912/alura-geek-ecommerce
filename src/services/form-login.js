import { v4 as uuidv4 } from 'uuid';

const onClick = (e) => {
  
}

const onSubmit = (e) => {
  // e.preventDefault();
  
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
  onClick,
  eliminarUsuario,
  crearUsuario,
  auxOp,
  onSubmit
}