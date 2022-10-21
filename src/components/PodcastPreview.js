import React from "react";
import { Heading, Box, SimpleGrid, Divider, Link, Flex } from '@chakra-ui/react'

function PodcastPreview() {
    
    return (
        <>
        <Box align="center" mt={150}>
            <Heading as="h3">My Podcasts</Heading>
            <Divider w="50%" color="gray.500" />
            <SimpleGrid m={10} columns={3} spacing={10}>
                <Box bg="white" height="150px" shadow="lg" rounded="12px"></Box>
                <Box bg="white" height="150px" shadow="lg" rounded="12px"></Box>
                <Box bg="white" height="150px" shadow="lg" rounded="12px"></Box>
            </SimpleGrid>
            <Flex justify="flex-end">
                <Link>Show more</Link>
            </Flex>
        </Box>
        </>
    )
}

export default PodcastPreview;