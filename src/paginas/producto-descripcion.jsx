import React from 'react';
import Producto from '../componentes/producto';
import ProductoSeleccionado from '../componentes/producto-seleccionado';

const ProductoDescripcion = () => {
  return (
    <div>
      <ProductoSeleccionado 
        src={'src de la imagen'} 
        nombre={'nombre'} 
        precio={500} 
        descripcion={'Aca va una descripcion del producto. Debe ser lo mas efectiva posible para que nos genere mucho dinero'} 
      />
      <div className='p-4'>
        <h3 className='text-xl font-medium mb-4'>Productos similares</h3>
        <Producto nombre={'tazon'} precio={35627} vinculoVerMas={'#'}/>
      </div>
    </div>
  );
}

export default ProductoDescripcion;
