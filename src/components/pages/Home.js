import React from 'react';
import Navbar from '../Navbar';
import PodcastPreview from '../PodcastPreview';
import UseAuth from './UseAuth';

export default function Home({ code }) {
    const accessToken = UseAuth(code);
    return (
        <>
        <Navbar />
        <PodcastPreview />
        </>
    )
}

// instead of putting the code in our home page, we want to create a custom hook that
// handles all this logic for us