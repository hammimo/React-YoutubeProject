import axios from 'axios';

export default class FakeYoutube {
    constructor() {
    }

    async search(keyword)  {
        return keyword ? this.#searchBykeyword(keyword) : this.#mostPopular();

    }

    async #searchBykeyword(){
        return axios
            .get(`/videos/search.json`)
            .then(res => res.data.items)
            .then(items => items.map(item => ({...item,id:item.id.videoId})));
    }

    async #mostPopular(){
        return axios
            .get(`/videos/popular.json`)
            .then(res => res.data.items);
    }
}