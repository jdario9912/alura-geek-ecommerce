import './App.css';
import Header from './componentes/header/header-component';
import Overlay from './componentes/overlay';
import { useState } from 'react';

function App() {
  const [showFormSearch, setShowFormSearch] = useState(false);

  const controlShowFormSearch = () => {
    setShowFormSearch(!showFormSearch);
  }

  return (
    
    <div className="App text-slate-700">
      <Header accionLupa={ controlShowFormSearch } showFormSearch={ showFormSearch }/>
      <Overlay visible={ showFormSearch } />
    </div>
  );
}

export default App;
