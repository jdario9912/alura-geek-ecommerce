import React from 'react';
import BannerComponent from '../componentes/banner/banner-component';
import ConsolasSeccion from '../componentes/secciones/consolas-seccion';
import Diversos from '../componentes/secciones/diversos';
import StarWarsSeccion from '../componentes/secciones/star-wars-seccion';

const Home = () => {
  return (
    <main>
      <BannerComponent />
      <StarWarsSeccion />
      <ConsolasSeccion />
      <Diversos />
    </main>
  );
}

export default Home;
