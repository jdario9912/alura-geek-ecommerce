import React from 'react';
import { formProductoNuevo } from '../../services/form-agregar-producto';


const Button = () => {
  return (
    <button 
      type="submit"
      className='bg-blue-600 text-slate-200 p-2'
      onClick={formProductoNuevo.catchInfoProductoNuevo}
    >
      Agregar producto
    </button>
  );
}

export default Button;
