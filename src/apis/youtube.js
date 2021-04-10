import axios from 'axios';

const KEY = 'AIzaSyDoZwqb3l4Wz_W4DXzbs4PA5GxORNhJp';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
