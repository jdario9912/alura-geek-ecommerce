import React from 'react';
import { LabelModel } from '../../modelos/label-model';
import Button from './button';
import FileReader from './file-reader';
import Label from './label';
import Select from './select';
import TextArea from './text-area';

const Formulario = () => {
  return (
    <form action="" className='flex flex-col gap-4 lg:w-1/3 mx-auto'>
      <FileReader />
      <Label props={ new LabelModel('nombre', 'Nombre:', 'text', 'nombre', 'nombre')} />
      <Label props={ new LabelModel('precio', 'Precio:', 'num', 'precio', 'precio')} />
      <TextArea />
      <Select />
      <Button />
    </form>
  );
}

export default Formulario;
