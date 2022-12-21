import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';

export default function PlayList() {
    const {keyword} = useParams();
    const {isLoading, error, data: videos} = useQuery(
        ['videos', keyword], async() => {
            return fetch(`/videos/${keyword? 'search' : 'popular'}.json`)
            .then(res => res.json())
            .then(data => data.items);
    });
    return (
    <>
        <div> videos {keyword ? `${keyword}` : '💥'}</div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong 🤣</p>}
        {videos && <ul>
            {videos.map((video) => (<VideoCard key ={video.id} video={video}/>))}
            </ul>}
    </>
    );
}

