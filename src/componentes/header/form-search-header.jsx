import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";

const FormSearchHeader = ({ visible }) => {
  const formVisible = 'flex absolute w-full -ml-4 translate-y-full transition -z-10 bg-slate-300 p-2 rounded-3xl',
        formInvisible = 'hidden'
  ;

  return (
    <form className={ visible ? formVisible : formInvisible }>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder=' ¿Que deseas buscar?' 
        className='w-full'
      />
      <button type="submit"><BiSearchAlt2/></button>
    </form>
  );
}

export default FormSearchHeader;
