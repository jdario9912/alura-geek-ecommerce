import './App.css';
import Header from './componentes/header/header-component';
import Overlay from './componentes/overlay';
import { useState, useEffect, createContext } from 'react';
import FooterComponent from './componentes/footer/footer-component';
import { Routes, Route } from "react-router-dom";
import Home from './paginas/home';
import Login from './paginas/login';
import ProductosTodos from './paginas/productos-todos';
import Error404 from './paginas/error404';
import AgregarProducto from './paginas/agregar-producto';
import EditarProducto from './paginas/editar-producto';
import EliminarProducto from './paginas/eliminar-producto';
import ProductoDescripcion from './paginas/producto-descripcion';
import ConfirmaProductoAgregado from './paginas/confirma-producto-agregado';
import ProductosPorSeccion from './paginas/productos-por-seccion';
import EnDesarrollo from './paginas/en-desarrollo';

export const NavBarContext = createContext();

function App() {
  const [showFormSearch, setShowFormSearch] = useState(false);
  
  const controlShowFormSearch = () => {
    setShowFormSearch(!showFormSearch);
  }

  const ocultaFormSearch = () => {
    setShowFormSearch(false);
  }

  useEffect(() => {
    window.addEventListener('resize', ocultaFormSearch);
  });

  const accionesForm = {
    showFormSearch,
    controlShowFormSearch,
    ocultaFormSearch
  }

  return (
    <div className="App text-slate-700 lg:w-4/5 mx-auto">
      <NavBarContext.Provider value={ accionesForm }>
        <Header />
        <Overlay />
      </NavBarContext.Provider>
      <div className='bg-neutral-100'>
        <Routes>
          <Route path="*" element={ <Error404 /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/en-desarrollo" element={ <EnDesarrollo /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/productos-todos" element={ <ProductosTodos /> } />
          <Route path="/agregar-producto" element={ <AgregarProducto /> } />
          <Route path="/producto-descripcion/:seccion/:id" element={ <ProductoDescripcion /> } />
          <Route path="/producto-descripcion/:seccion/:id" element={ <ProductoDescripcion /> } />
          <Route path="/producto-descripcion/:seccion/:id" element={ <ProductoDescripcion /> } />
          <Route path="/editar-producto/:seccion/:id" element={ <EditarProducto />} />
          <Route path="/eliminar-producto/:seccion/:id" element={ <EliminarProducto />} />
          <Route path="/confirma-producto-agregado" element={ <ConfirmaProductoAgregado />} />
          <Route path="/producto-por-seccion/:seccion" element={ <ProductosPorSeccion />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
