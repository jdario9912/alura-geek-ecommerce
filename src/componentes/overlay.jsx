import React, { useContext } from 'react';
import { NavBarContext } from '../App'

const Overlay = () => {
  const { showFormSearch, ocultaFormSearch } = useContext(NavBarContext);

  const overlayVisible = 'fixed top-0 w-screen h-screen bg-slate-800/50 z-10',
        overlayHidden = 'w-0 h-0'
  ;

  return (
    <div className={ showFormSearch ? overlayVisible : overlayHidden } onClick={ ocultaFormSearch }></div>
  );
}

export default Overlay;
