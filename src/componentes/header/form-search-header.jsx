import React, { useContext,  } from 'react';
import { useRef } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { NavBarContext } from '../../App';

const FormSearchHeader = () => {
  const formVisible = 'flex gap-2 absolute w-full -ml-4 translate-y-[57px] transition -z-10 bg-slate-300 p-2 rounded-b-2xl',
        formInvisible = 'flex gap-2 absolute w-full -ml-4 transition invisible md:visible md:relative md:w-2/5 md:bg-slate-200 md:p-3 md:rounded-3xl'
  ;
  const { showFormSearch } = useContext(NavBarContext);
  const inputSearch = useRef();

  return (
    <form className={ showFormSearch ? formVisible : formInvisible }>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder=' ¿Que deseas buscar?' 
        className='w-full pl-1 rounded-r-xl md:rounded-sm md:bg-inherit md:focus:bg-[#FFFFFF]'
        ref={ inputSearch }
      />
      <button type="submit" className='text-2xl'><BiSearchAlt2/></button>
    </form>
  );
}

export default FormSearchHeader;
