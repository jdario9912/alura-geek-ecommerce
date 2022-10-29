import React from 'react';
import TituloPagina from '../componentes/titulo-pagina';

const Login = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <TituloPagina texto='Iniciar sesión' />
      <form action="" className='flex flex-col gap-4'>
        <label htmlFor="nombre" className={ estilosLabel }>
          Usuario:
          <input type="text" id='nombre' />
        </label>

        <label htmlFor="precio" className={ estilosLabel }>
          Contraseña:
          <input type="num" id='precio' />
        </label>  

        <button 
          type="submit"
          className='bg-blue-600 text-slate-200 p-2'
        >
          Ingresar
        </button>  
      </form> 
    </div>
  );
}

export default Login;
