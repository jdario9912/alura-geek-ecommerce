import React from 'react';

const Button = ({ accion }) => {
  const estilos = 'bg-blue-600 text-slate-200 p-2';
  return (
    <button type="submit" className={ estilos } onClick={ accion }>
      Actualizar producto
    </button>
  );
}

export default Button;
