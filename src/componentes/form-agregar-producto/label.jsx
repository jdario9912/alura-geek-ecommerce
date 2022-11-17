import React from 'react';
import Input from './input';

const Label = ({props}) => {
  return (
    <div>
      <label htmlFor={props.htmlFor} className='border-b-2 flex flex-col p-2'>
        {props.texto}
        <Input type={props.type} id={props.id} data={props.data} />
      </label>
    </div>
  );
}

export default Label;
