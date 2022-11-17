import React from 'react';

const OptionSelect = ({ value, texto, selected }) => {
  return (
    <>
      <option selected={ selected } value={ value }>{ texto }</option>
    </>
  );
}

export default OptionSelect;
