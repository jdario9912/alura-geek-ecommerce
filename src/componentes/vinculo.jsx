import React from 'react';

const Vinculo = ({ props }) => {
  return (
    <a href={ props.url } className={ props.estilos }>
      { props.texto }
    </a>
  );
}

// props es un objeto de tipo vinculo en ./src/modelos/vinculo.js

export default Vinculo;
