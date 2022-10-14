import React from 'react';

const Overlay = ({ visible }) => {
  const overlayVisible = 'block w-screen h-screen bg-red-400',
        overlayHidden = 'w-0 h-0'
  ;
  return (
    <div className={ visible ? overlayVisible : overlayHidden }>
      
    </div>
  );
}

export default Overlay;
