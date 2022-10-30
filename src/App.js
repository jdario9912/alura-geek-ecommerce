import './App.css';
import Header from './componentes/header/header-component';
import Overlay from './componentes/overlay';
import { useState, useEffect } from 'react';
import FooterComponent from './componentes/footer/footer-component';
import Home from './paginas/home';
import { Routes, Route } from "react-router-dom";
import Login from './paginas/login';
import ProductosTodos from './paginas/productos-todos';
import Error404 from './paginas/error404';

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

  return (
    <div className="App text-slate-700">
      <Header accionLupa={ controlShowFormSearch } showFormSearch={ showFormSearch }/>
      <Routes>
        <Route path="*" element={ <Error404 /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/productos-todos" element={ <ProductosTodos /> } />
      </Routes>
      <Overlay visible={ showFormSearch } accionOverlay={ controlShowFormSearch } />
      <FooterComponent />
    </div>
  );
}

export default App;
