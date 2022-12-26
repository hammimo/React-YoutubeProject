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
        <section>
            <article>
                <iframe 
            id="player"
            type="text/html" 
            width="100%" 
             height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            />
            <div>
                <h2>{title}</h2>
                <ChannerInfo id = {channelId} name= {channerTitle}/>
                <pre>{description}</pre>
            </div>
            </article>
            <section>
                <RelatedVideos id={video.id} />
            </section>
        </section>
    );
}

