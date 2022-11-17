import React from 'react';
import ReactFileReader from 'react-file-reader';
import { formProductoNuevo } from '../../services/form-agregar-producto';


const FileReader = () => {
  return (
    <ReactFileReader fileTypes={[".png", "jpg", "jpeg"]} handleFiles={formProductoNuevo.capturarImagen} base64={true} multipleFiles={false}>
      <p>Imagen:</p>
      <div className='w-full max-w-xs h-72 max-h-80 border border-dashed border-slate-400 bg-slate-200'>
        <img src="" alt="" className='w-full h-full' data-img />
      </div>
    </ReactFileReader>
  );
}

export default FileReader;
