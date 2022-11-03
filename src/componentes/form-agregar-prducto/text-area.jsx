import React from 'react';

const TextArea = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';
  return (
    <label htmlFor="descripcion" className={ estilosLabel }>
      Descripción:
      <textarea id='descripcion' data-descripcion />
    </label>
  );
}

export default TextArea;
