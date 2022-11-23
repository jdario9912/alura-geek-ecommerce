import React from 'react';
import TituloPagina from '../componentes/titulo-pagina';
import { formLogin } from '../services/form-login';

const Login = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';  

  return (
    <div className='w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center'>
      <TituloPagina texto='Iniciar sesión' />
      <form action="" className='flex flex-col gap-4'>

        <label htmlFor="usuario" className={ estilosLabel }>
          Usuario:
          <input type="text" id='usuario' data-usuario />
        </label>

        <label htmlFor="password" className={ estilosLabel }>
          Contraseña:
          <input type="password" id='password' data-password />
        </label>

        <button 
          type="submit"
          className='bg-blue-600 text-slate-200 p-2'
          onClick={ formLogin.catchInfoUsuario }
        >
          Ingresar
        </button>        
      </form> 
    </div>
  );
}

export default Login;
