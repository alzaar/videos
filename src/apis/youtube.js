import axios from 'axios';
const KEY = 'sjkhdk';

axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

export default KEY;
