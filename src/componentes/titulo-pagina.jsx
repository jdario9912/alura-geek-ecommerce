import React from 'react';

const TituloPagina = ({texto}) => {
  return (
    <p className='text-xl font-medium pb-8'>
      { texto }
    </p>
  );
}

export default TituloPagina;
