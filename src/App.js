import './App.css';
import Nav from './components/Navbar';
import SmallWithLogoLeft from './components/Footer';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Producto } from './components/Producto';
import { Grid, GridItem, Box, Image, Text, Button, Center, Flex } from '@chakra-ui/react'
import { Col } from 'react-bootstrap';
import { extendTheme } from "@chakra-ui/react"
import React from 'react';

//ecommerce de productos
function App() {

  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

  let carritoInicial = JSON.parse(localStorage.getItem('carrito'));
  if (!carritoInicial) {
    carritoInicial = [];
  }

  let [carrito, guardarCarrito] = useState(carritoInicial);

  useEffect(
    () => {
    if(carritoInicial){
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }, [carritoInicial]
  );

  const theme = extendTheme({breakpoints})

  //lista de productos
  let [productos, guardarProductos] = useState([{
    id: 1,
    nombre: 'Lionel Messi',
    precio: 800,
    imagen: 'https://i.redd.it/uqgewilktrk91.png',
  },
  {
    id: 2,
    nombre: 'Rodrigo De Paul',
    precio: 600,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_695092-MLA51863894196_102022-V.jpg',

  },
  {
    id: 3,
    nombre: 'Franco Armani',
    precio: 600,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_792854-MLA51863059524_102022-V.jpg',
  },
  {
    id: 4,
    nombre: 'Julian Alvarez',
    precio: 500,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_966646-MLA51863894290_102022-O.webp',
  }
  ]);

  //lista de productos del carrito

  // Agregar producto al carrito
  const seleccionarProducto = (id )=> {
    const producto = productos.filter(producto => producto.id === id)[0];
    agregarAlCarrito([
        ...carrito,
        producto
    ]);
    
  }

  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);

    // Colocar los productos en el state
    guardarCarrito(nuevoCarrito);

    console.log(carrito);
  }

  //creando productos disponibles
  const agregarAlCarrito = (producto) => {
    guardarCarrito([...carrito, producto]);

    console.log(carrito);
  }

  return (
    <ChakraProvider theme={theme}>
      <Nav 
        carrito={carrito}
        eliminarProducto={eliminarProducto}
      />
      <Box p='6' ml='10'>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
          {productos.map(producto => (
            <GridItem w='100%' h='10'>
              <Flex alingitems={'center'}>
                <Producto
                  producto={producto}
                  key={producto.id}
                  carrito={carrito}
                  productos={productos}
                  eliminarProducto={eliminarProducto}
                  agregarAlCarrito={agregarAlCarrito}
                />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <SmallWithLogoLeft />
    </ChakraProvider>
  );
}

export default App;
