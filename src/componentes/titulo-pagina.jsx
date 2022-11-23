import React from 'react';

const TituloPagina = ({texto}) => {
  return (
    <p className='text-xl font-medium pb-8 lg:text-4xl'>
      { texto }
    </p>
  );
}

export default TituloPagina;
