import React from 'react';
import { Flex, Button,  HStack, Link } from '@chakra-ui/react';
import MobileNavDrawer from "./MobileNavDrawer"
// import { Link } from 'react-router-dom';

const CTA = "Get Started";
function Navbar() {

    return (
        <>
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <Link href='/'>PodTrack</Link>
                <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                    <Link>
                        <Button variant="nav">Shows</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Episodes</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">FAQ's</Button>
                    </Link>
                </HStack>
                <HStack>
                    <Button>{CTA}</Button>
                    <MobileNavDrawer />
                </HStack>
            </Flex>
        </>
    )
}

export default Navbar;