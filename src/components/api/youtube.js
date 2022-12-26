import axios from 'axios';

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://youtube.googleapis.com/youtube/v3',
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
        })
    }

    async search(keyword)  {
        return keyword ? this.#searchBykeyword(keyword) : this.#mostPopular();

    }

    async #searchBykeyword(keyword){
        return this.httpClient
            .get('search',{params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: keyword
            }})
            .then(res => res.data.items)
            .then(items => items.map(item => ({...item,id:item.id.videoId})));
    }

    async #mostPopular(){
        return this.httpClient
        .get('videos',{params: {
            part: 'snippet',
            maxResults: 25,
            chart: 'mostPopular',
        }})
            .then(res => res.data.items);
    }
}