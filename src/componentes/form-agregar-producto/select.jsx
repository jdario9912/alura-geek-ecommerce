import React from 'react';

const Select = () => {
  const estilosLabel = 'border-b-2 flex flex-col p-2';
  return (
    <label htmlFor="seccion" className={ estilosLabel }>
      Sección:
      <select id='seccion' data-seccion required>
        <option value="starWars">Star Wars</option>
        <option value="consolas">Consolas</option>
        <option value="diversos">Diversos</option>
      </select>
    </label>
  );
}

export default Select;
