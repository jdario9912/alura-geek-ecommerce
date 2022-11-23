import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlApi } from '../../config-api/config-api';

const TextArea = ({ nombre }) => {
  
  const estilosLabel = 'border-b-2 flex flex-col p-2 capitalize';
  const estilosTextArea = 'w-full h-32';
  const [valueTA, setValueTA] = useState('');
  const { seccion, id } = useParams();

  useEffect(() => {
    fetch(urlApi + seccion + '/' + id)
      .then(res => res.json())
      .then(resProducto => setValueTA(resProducto.descripcion))
      .catch(e => alert(e))
  }, []);

  const actualizar = (e) => {
    setValueTA(e.target.value);
  }

  return (
    <label htmlFor={ nombre } className={ estilosLabel }>
      { nombre }:
      <textarea 
        id={ nombre } 
        value={ valueTA } 
        data={ nombre }
        className={ estilosTextArea }
        onChange={ actualizar }
        required
      />
    </label>
  );
}

export default TextArea;
