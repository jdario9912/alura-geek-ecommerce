import React from 'react';
import Logo from '../logo';
import { LogoSize } from '../../modelos/logo-size';
import FormSearchHeader from './form-search-header';
import { BiSearchAlt2 } from "react-icons/bi";
import Vinculo from '../vinculo';
import { VinculoModel } from '../../modelos/vinculo-model';

const Header = ({ accionLupa, showFormSearch }) => {

  const sizeLogoNavBar = new LogoSize('','');
  const vinculoHeaderLogin = new VinculoModel('Login', '/login', 'px-8 py-2 border border-blue-600 text-blue-600');

  

  return (
    <header className='flex relative items-center justify-between p-4 z-50'>
      <Logo sizes={ sizeLogoNavBar } />
      <FormSearchHeader visible={ showFormSearch }/>
      <Vinculo props={ vinculoHeaderLogin } />
      <div onClick={ accionLupa } className='hover:cursor-pointer'><BiSearchAlt2 /></div>
    </header>
  );
}

export default Header;
