import React, { useContext } from 'react';
import { NavBarContext } from '../../App';
import { BiSearchAlt2, BiX } from "react-icons/bi";

const LupaComponent = () => {
  const { controlShowFormSearch, showFormSearch } = useContext(NavBarContext);
  const estilos = 'text-2xl md:hidden hover:cursor-pointer';
  return (
    <div onClick={ controlShowFormSearch } className={ estilos }>
      { showFormSearch ? <BiX /> : <BiSearchAlt2/> }
    </div>
  );
}

export default LupaComponent;
