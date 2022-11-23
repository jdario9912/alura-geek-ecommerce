import React from 'react';
import Logo from '../logo';
import { LogoSize } from '../../modelos/logo-size';
import FormSearchHeader from './form-search-header';
import Vinculo from '../vinculo';
import { VinculoModel } from '../../modelos/vinculo-model';
import LupaComponent from './lupa-component';

const Header = () => {

  const sizeLogoNavBar = new LogoSize('','text-lg');
  const vinculoHeaderLogin = new VinculoModel('Login', '/login', 'px-8 py-2 border border-blue-600 text-blue-600');

  return (
    <header className='flex relative items-center justify-between p-4 z-50 bg-[#FFFFFF] md:p-7'>
      <Logo sizes={ sizeLogoNavBar } />
      <FormSearchHeader />
      <Vinculo props={ vinculoHeaderLogin } />
      <LupaComponent />
    </header>
  );
}

export default Header;
