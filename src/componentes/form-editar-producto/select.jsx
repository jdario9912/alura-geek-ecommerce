import React, { useState, useEffect } from 'react';
import { urlApi } from '../../config-api/config-api';
import OptionSelect from './option-select';
import { useParams } from 'react-router-dom';

const Select = ({ nombre }) => {

  const estilosLabel = 'border-b-2 flex flex-col p-2 capitalize';
  const { seccion, id } = useParams();

  const [valueSelect, setValueSelect] = useState('');

  useEffect(() => {
    fetch(urlApi + seccion + '/' + id)
        .then(res => res.json())
        .then(resProducto => setValueSelect(resProducto.seccion))
        .catch(e => alert(e))
  }, []);

  const actualizar = (e) => {
    setValueSelect(e.target.value);
  }

  return (
    <label htmlFor={ nombre } className={ estilosLabel }>
      { nombre }:
      <select id={ nombre } data={ nombre } value={ valueSelect } onChange={ actualizar }>
        <OptionSelect value='starWars' texto='Star Wars' />
        <OptionSelect value='consolas' texto='Consolas' />
        <OptionSelect value='diversos' texto='Diversos' />
      </select>
    </label>
  );
}

export default Select;
