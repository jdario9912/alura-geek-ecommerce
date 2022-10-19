import React from 'react';
import { LogoSize } from '../../modelos/logo-size';
import Logo from '../logo';
import Vinculo from '../vinculo';
import { VinculoModel } from '../../modelos/vinculo-model';

const FooterComponent = () => {
  const sizeLogoFooter = new LogoSize('', '');

  const lineHeight = 'leading-7'

  return (
    <footer className='flex flex-col items-center bg-[#EAF2FD] pt-4 px-4'>
      <Logo sizes={sizeLogoFooter} />
      <div className='flex flex-col items-center my-4'>
          <Vinculo props={ new VinculoModel('Quienes somos', '#', lineHeight)} />
          <Vinculo props={ new VinculoModel('Política de privacidad', '#', lineHeight)} />
          <Vinculo props={ new VinculoModel('Programa de fidelidad', '#', lineHeight)} />
          <Vinculo props={ new VinculoModel('Nuestras tiendas', '#', lineHeight)} />
          <Vinculo props={ new VinculoModel('Quiero una franquicia', '#', lineHeight)} />
          <Vinculo props={ new VinculoModel('Anúncie aquí', '#', lineHeight)} />
      </div>
      <div className='my-4'>
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
      <div className='bg-[#FFFFFF] w-screen'>
        <p className='text-center'>Desarrolado por Joel</p>
        <p className='text-center'>2022</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
