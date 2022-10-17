import './App.css';
import Header from './componentes/header/header-component';
import Overlay from './componentes/overlay';
import { useState, useEffect } from 'react';
import FooterComponent from './componentes/footer/footer-component';

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
      <Overlay visible={ showFormSearch } accionOverlay={ controlShowFormSearch } />
      <FooterComponent />
    </div>
  );
}

export default App;
