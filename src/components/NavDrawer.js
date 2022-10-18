import React from 'react';
import { Link, Drawer, DrawerBody, Flex, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
// import {  IoMdMenu } from 'react-icons/io';

function NavDrawer() {
  const { isOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
    <Flex width="100%">
      {/* <Button onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button> */}
      <Drawer placement='right' onClose={onClose} isOpen={isOpen} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx="15" my="15" />
          <DrawerHeader my="15">PodTrack</DrawerHeader>
          <DrawerBody>
          <Link>
                <Button variant="nav">Shows</Button>
            </Link>
            <Link>
                <Button variant="nav">Episodes</Button>
            </Link>
            <Link>
                <Button variant="nav">FAQ's</Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
    </>
  )
}

export default NavDrawer;