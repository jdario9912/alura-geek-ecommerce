import React from 'react';

const Login = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';
  return (
    <div className='w-full h-screen flex justify-center items-center'>
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
