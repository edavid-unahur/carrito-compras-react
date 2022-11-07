import React from 'react';
import { Button, Box } from '@chakra-ui/react';

export const Producto = ({ producto, carrito, agregarAlCarrito, productos, eliminarProducto }) => {
    const { id, nombre, precio, imagen } = producto;

    return (
        <>
            {productos ? (
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Box p='6'>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {nombre}
                        </Box>

                        <img className="imagen-producto" src={imagen}></img>
                        <Box>
                            {precio}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / Ars
                            </Box>
                        </Box>
                        <Button
                            type="button"

                            onClick={() => agregarAlCarrito(producto)}
                        >Comprar</Button>
                    </Box>
                </Box>

            ) : (
                <>
                    <p>{nombre} | {precio}</p>
                    <Button
                        type="button"
                        className='btn btn-primary'
                        onClick={() => eliminarProducto(id)}
                    >Eliminar</Button>
                </>

            )
            }
        </>
    )
}

export default Producto;