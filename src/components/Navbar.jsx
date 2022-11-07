import { ReactNode } from 'react';
import { Box,Flex,Avatar,Button,Menu,MenuButton,MenuList,MenuItem,
MenuDivider,useDisclosure,useColorModeValue,Stack,useColorMode,Center,} from '@chakra-ui/react';
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,} from '@chakra-ui/react'
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Carrito from './Carrito';

export default function Nav( {carrito, eliminarProducto} ) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Tienda Figus</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Barrilete Cosmico</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem ref={btnRef} onClick={onOpen}>
                    Mostrar Carrito
                  </MenuItem>
                  <MenuItem><a href='https://www.instagram.com/_ezqdavid/' target='_blank'>Contacto</a></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito de Compras</DrawerHeader>

          <DrawerBody>
            <Carrito 
              carrito={carrito}
              eliminarProducto={eliminarProducto}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue'>Recibir Figus</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}