import React from 'react';
import { Flex, Box, Heading, Text, Input, FormControl, FormLabel } from '@chakra-ui/react';

const AUTH_URL = process.env.REACT_APP_AUTH_URL

function Login() {

    return (
        <>
        <Box textAlign="center" py='20'>
            <Heading as='h2' size='3xl'>PodTrack</Heading>
        </Box>
        <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
            <Text color="green" fontSize='lg'>Using Spotify Credentials</Text>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="*******" />
              </FormControl>
              <a href={AUTH_URL} width="full" mt={4} type="submit" colorScheme="green" variant="solid">
                Sign In
              </a>
            </form>
          </Box>
        </Box>
      </Flex>
      </>
    )
}

export default Login;