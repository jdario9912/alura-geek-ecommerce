import React, { useContext } from 'react';
import { InputProdModel } from '../../modelos/input-editar-prod-model';
import { ProductoContext } from '../../paginas/editar-producto';
import { formEditarProducto } from '../../services/form-editar-producto';
import Button from './button';
import FileReader from './file-reader';
import InputFecha from './input-fecha';
import InputNombre from './input-nombre';
import InputPrecio from './input-precio';
import Select from './select';
import TextArea from './text-area';

const Formulario = () => {

  const { id, nombre, imgBase64 } = useContext(ProductoContext);
  
  return (
    <form className='flex flex-col gap-4'>
      <input type="num" disabled id={ id } value={ id } hidden data-id />
      <FileReader imgBase64={ imgBase64 } nombre={ nombre } />
      <InputNombre props= { new InputProdModel('nombre', 'text', false)} />
      <InputPrecio props= { new InputProdModel('precio', 'text', false)} />
      <TextArea nombre='descripcion' />
      <Select nombre='seccion' />
      <InputFecha props= { new InputProdModel('fecha', 'text', true)} />
      <Button accion={ formEditarProducto.actualizarProducto }/>
    </form>
  );
}

export default Formulario;
