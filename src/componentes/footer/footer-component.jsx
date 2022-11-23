import React from 'react';
import { LogoSize } from '../../modelos/logo-size';
import Logo from '../logo';
import Vinculo from '../vinculo';
import { VinculoModel } from '../../modelos/vinculo-model';

const FooterComponent = () => {
  const sizeLogoFooter = new LogoSize('lg:', 'lg:text-2xl');

  const lineHeight = 'leading-7 lg:leading-10';

  return (
    <footer className='flex flex-col items-center bg-[#EAF2FD] pt-4 px-4'>
      <div className='lg:flex lg:w-full lg:justify-around lg:py-4'>
        <Logo sizes={sizeLogoFooter} />
        <div className='flex flex-col items-center my-4 lg:items-start lg:my-0'>
            <Vinculo props={ new VinculoModel('Quienes somos', '/en-desarrollo', lineHeight)} />
            <Vinculo props={ new VinculoModel('Política de privacidad', '/en-desarrollo', lineHeight)} />
            <Vinculo props={ new VinculoModel('Programa de fidelidad', '/en-desarrollo', lineHeight)} />
            <Vinculo props={ new VinculoModel('Nuestras tiendas', '/en-desarrollo', lineHeight)} />
            <Vinculo props={ new VinculoModel('Quiero una franquicia', '/en-desarrollo', lineHeight)} />
            <Vinculo props={ new VinculoModel('Anúncie aquí', '#', lineHeight)} />
        </div>
        <div className='my-4 lg:my-0'>
          <h2 className='font-bold'>Hable con nosotros</h2>
          <form action="" className=''>
            <label htmlFor="nombre" className='flex flex-col bg-[#FFFFFF] border-b-2 border-slate-300 mt-4'>
              Nombre:
              <input type="text" id='nombre' className='w-full' />
            </label>
            <label htmlFor="mensaje" className='flex flex-col bg-[#FFFFFF] border-b-2 border-slate-300 mt-4'>
              Mensaje:
              <textarea name="mensaje" id="mensaje" cols="30" rows="5" className='w-full'></textarea>
            </label>
            <button type="submit" className='py-2 px-6 bg-blue-600 mt-2 text-[#FFFFFF]'>Enviar Mensaje</button>
          </form>
        </div>
      </div>
      <div className='bg-[#FFFFFF] w-screen p-2'>
        <p className='text-center'>&#169; copyright Joel</p>
        <p className='text-center'>2022</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
