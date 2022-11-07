import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import Producto from './Producto';

const Carrito = ({ carrito,eliminarProducto }) => {
    return (
        <>
            <div className='carrito'>
                {carrito.length === 0
                    ? <p>No hay elementos en el carrito</p>
                    : carrito.map((producto)=> (
                        <Producto
                            key={producto.id}
                            producto={producto}
                            eliminarProducto={eliminarProducto}
                        />
                    ))}
            </div>
        </>
    )


}

export default Carrito;