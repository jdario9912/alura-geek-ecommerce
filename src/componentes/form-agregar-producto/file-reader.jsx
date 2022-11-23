import React, { useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { formProductoNuevo } from '../../services/form-agregar-producto';
import { AiOutlineUpload } from "react-icons/ai";


const FileReader = () => {
  const [estiloImg, setEstiloImg] = useState('w-full max-w-xs h-72 max-h-80 border border-dashed border-slate-400 bg-slate-200');

  const manejadorImg = (e) => {
    setEstiloImg('w-full max-w-xs h-72 max-h-80 border border-dashed border-slate-400 bg-slate-200 relative')
    console.log(e.target);
  }
  return (
    <div>
      <ReactFileReader fileTypes={[".png", "jpg", "jpeg"]} handleFiles={formProductoNuevo.capturarImagen} base64={true} multipleFiles={false}>
      <p>Imagen:</p>
      <div className='absolute w-full bg-slate-400 text-slate-300 h-72 max-w-xs flex flex-col justify-center items-center text-4xl'>
        <AiOutlineUpload />
        <p className='text-xl'>Elegir foto</p>
      </div>
      <div className={ estiloImg }>
        <img src="" alt="" className='w-full h-full' required data-img onLoad={ manejadorImg } />
      </div>
    </ReactFileReader>
    </div>
  );
}

export default FileReader;
