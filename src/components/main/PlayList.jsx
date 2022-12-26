import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import Youtube from '../api/fakeYoutube';
import fakeYoutube from '../api/fakeYoutube';

export default function PlayList() {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data: videos} 
    = useQuery(
        ['videos', keyword], () => {
        const youtube = new fakeYoutube();
        return youtube.search(keyword)}
        );
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

