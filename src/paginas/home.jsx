import React from 'react';
import BannerComponent from '../componentes/banner/banner-component';
import ConsolasSeccion from '../componentes/secciones/consolas-seccion';
import DiversosSeccion from '../componentes/secciones/diversos-seccion';
import StarWarsSeccion from '../componentes/secciones/star-wars-seccion';

const Home = () => {
  return (
    <main>
      <BannerComponent />
      <StarWarsSeccion />
      <ConsolasSeccion />
      <DiversosSeccion />
    </main>
  );
}

export default Home;
