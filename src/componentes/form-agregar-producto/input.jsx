import React from 'react';

const Input = ({type, id, data}) => {
  return (
    <>
     <input type={type} id={id} data={data} required /> 
    </>
  );
}

export default Input;
