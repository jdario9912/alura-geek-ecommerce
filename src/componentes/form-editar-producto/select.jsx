import React, { useContext } from 'react';
import { ProductoContext } from '../../paginas/editar-producto';
import OptionSelect from './option-select';

const Select = ({ nombre }) => {
  const estilosLabel = 'border-b-2 flex flex-col p-2 capitalize';
  const { seccion } = useContext(ProductoContext);
  return (
    <label htmlFor={ nombre } className={ estilosLabel }>
      { nombre }:
      <select id={ nombre } data={ nombre } value={ seccion }>
        <OptionSelect value='starWars' texto='Star Wars' />
        <OptionSelect value='consolas' texto='Consolas' />
        <OptionSelect value='diversos' texto='Diversos' />
      </select>
    </label>
  );
}

export default Select;
