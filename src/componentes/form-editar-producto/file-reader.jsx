import React from 'react';
import ReactFileReader from 'react-file-reader';
import { formEditarProducto } from '../../services/form-editar-producto';

const FileReader = ({ imgBase64, nombre }) => {
  return (
    <ReactFileReader fileTypes=".png" handleFiles={formEditarProducto.capturarImagen} base64={true} multipleFiles={false}>
      <p>Imagen:</p>
      <div className='w-full max-w-xs h-72 max-h-80 border border-dashed border-slate-400 bg-slate-200'>
        <img src={imgBase64} alt={ `Foto de ${ nombre }`} className='w-full h-full' data-img />
      </div>
    </ReactFileReader>
  );
}

export default FileReader;
