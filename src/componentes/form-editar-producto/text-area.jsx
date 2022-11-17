import React, { useState } from 'react';

const TextArea = ({ nombre, value }) => {
  
  const estilosLabel = 'border-b-2 flex flex-col p-2 capitalize';
  const estilosTextArea = 'w-full h-32';
  const [valueTA, setValue] = useState(value);

  return (
    <label htmlFor={ nombre } className={ estilosLabel }>
      { nombre }:
      <textarea 
        id={ nombre } 
        value={ valueTA } 
        data={ nombre }
        className={ estilosTextArea }
        onChange={ e => setValue(e.target.value) }
      />
    </label>
  );
}

export default TextArea;
