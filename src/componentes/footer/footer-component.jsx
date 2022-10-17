import React from 'react';
import { LogoSize } from '../../modelos/logo-size';
import Logo from '../logo';
import Vinculo from '../vinculo';
import { VinculoModel } from '../../modelos/vinculo-model';


const FooterComponent = () => {
  const sizeLogoFooter = new LogoSize('', '');
  // const vQS = new VinculoModel('Quienes Somos', '#', '');

  return (
    <footer className='flex bg-[#EAF2FD]'>
      <div>
        <Logo sizes={sizeLogoFooter} />
        <div>
          <Vinculo props={new VinculoModel('Quienes Somos', '#', '')}/>
          <Vinculo props={new VinculoModel('Programa de Fidelidad', '#', '')}/>
          <Vinculo props={new VinculoModel('Nuestras Tiendas', '#', '')}/>
          <Vinculo props={new VinculoModel('Quiero una Franquicia', '#', '')}/>
          <Vinculo props={new VinculoModel('Politica de Privacidad', '#', '')}/>
          <Vinculo props={new VinculoModel('Anúncie Aquí', '#', '')}/>
        </div>
        <form action="">
          <label htmlFor="nombre">
            Nombre
            <input type="text" id='nombre' />
          </label>
          <label htmlFor="mensaje">
            Mensaje
            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
          </label>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
      <div>

      </div>
    </footer>
  );
}

export default FooterComponent;
