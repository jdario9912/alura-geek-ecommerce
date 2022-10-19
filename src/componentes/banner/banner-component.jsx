import React from 'react';
import { VinculoModel } from '../../modelos/vinculo-model';
import Vinculo from '../vinculo';

const BannerComponent = () => {
  const estilos = 'capitalize bg-blue-600 p-2 text-sm';
  return (
    <section className="bg-[url('./img/banner.png')] bg-center bg-cover bg-no-repeat h-48 text-[#ffffff] p-4 flex flex-col justify-end items-start gap-2">
      <p className='text-xl font-medium'>Febrero promocional</p>
      <p className='text-sm'>Productos seleccionados con 33% de descuento</p>
      <Vinculo props={ new VinculoModel('Ver consolas', '/consolas', estilos)}/>
    </section>
  );
}

export default BannerComponent;
