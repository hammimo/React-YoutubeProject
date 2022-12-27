import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannerInfo from '../ChannerInfo';
import RelatedVideos from '../RelatedVideos';


export default function VideoDetail() {
    const {
        state : {video},
    } = useLocation();
    const {title, channelId, channerTitle , description} = video.snippet;
    return (
        <section className='flex flex-col lg:flex-row'>
            <article className='basis-4/6'>
                <iframe 
            id="player"
            type="text/html" 
            width="100%" 
             height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            />
            <div className='p-8'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <ChannerInfo id = {channelId} name= {channerTitle}/>
                <pre className='whitespace-pre-wrap'>{description}</pre>
            </div>
            </article>
            <section className='basis-2/6'>
                <RelatedVideos id={video.id} />
            </section>
        </section>
    );
}

