import React, { useContext, useState, useEffect } from 'react';
import { InputProdModel } from '../../modelos/input-editar-prod-model';
import { ProductoContext } from '../../paginas/editar-producto';
import { formEditarProducto } from '../../services/form-editar-producto';
import Button from './button';
import FileReader from './file-reader';
import Input from './input';
import Select from './select';
import TextArea from './text-area';

const Formulario = () => {

  const { id, nombre, precio, fecha, imgBase64, descripcion } = useContext(ProductoContext);
  const [nombreF, setNombreF] = useState('');

  useEffect(() => {
    setNombreF(nombre);
    console.log(nombreF);
  }, []);
  
  return (
    <form className='flex flex-col gap-4'>
      <input type="num" disabled id={ id } value={ id } hidden data-id />
      <FileReader imgBase64={ imgBase64 } />
      <Input props= { new InputProdModel('nombre', 'text', false, nombre)} />
      <Input props= { new InputProdModel('precio', 'text', false, precio)} />
      <TextArea nombre='descripcion' value={ descripcion }/>
      <Select nombre='seccion' />
      <Input props= { new InputProdModel('fecha', 'text', true, fecha)} />
      <Button accion={ formEditarProducto.actualizarProducto }/>
    </form>
  );
}

export default Formulario;
