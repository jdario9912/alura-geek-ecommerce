import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlApi } from '../../config-api/config-api';

const InputFecha = ({ props }) => {
  const estilosLabel = 'border-b-2 flex flex-col p-2 capitalize';
  const [valueInput, setValueInput] = useState('');

  const { seccion, id } = useParams();

  useEffect(() => {
    fetch(urlApi + seccion + '/' + id)
      .then(res => res.json())
      .then(resProducto => setValueInput(resProducto.fecha))
      .catch(e => alert(e))
  }, []);

  const actualizar = (e) => {
    setValueInput(e.target.value);
  }

  return (
    <label htmlFor={ props.nombre } className={ estilosLabel }>
      { props.nombre }:
      <input 
        type={ props.type } 
        id={ props.nombre } 
        disabled={ props.disabled } 
        data={ props.nombre } 
        value={ valueInput }
        onChange={ actualizar }
        />
    </label>
  );
}

export default InputFecha;
