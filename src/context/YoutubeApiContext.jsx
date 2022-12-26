import { createContext, useContext } from 'react';
import Youtube from '../components/api/youtube';
import YoutubeClient from '../components/api/youtubClient';
import FakeYoutubeClient from '../components/api/FakeYoutubeClient';

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi(){
    return useContext(YoutubeApiContext);
}