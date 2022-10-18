import React from "react";
import { useDisclosure, Flex, Button, VStack, Link } from "@chakra-ui/react";
import NavDrawer from './NavDrawer';
import { IoMdMenu } from 'react-icons/io';
// import { Link } from 'react-scroll';
// import data from './header.data';


function MobileNavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
return (
  <>
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>

      <NavDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="left">
            <Link>
                <Button variant="nav">Shows</Button>
            </Link>
            <Link>
                <Button variant="nav">Episodes</Button>
            </Link>
            <Link>
                <Button variant="nav">FAQ's</Button>
            </Link>
        </VStack>
      </NavDrawer>
    </Flex>
    </>
  );
};

export default MobileNavDrawer;