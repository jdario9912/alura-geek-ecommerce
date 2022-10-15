import React from 'react';

const Overlay = ({ visible, accionOverlay }) => {
  const overlayVisible = 'fixed top-0 w-screen h-screen bg-slate-800/50 z-10',
        overlayHidden = 'w-0 h-0'
  ;
  return (
    <div className={ visible ? overlayVisible : overlayHidden } onClick={ accionOverlay }></div>
  );
}

export default Overlay;
