import axios from 'axios';
const KEY = 'AIzaSyB9fgVJ9RV9uLbZPkLFdH0USPg_I7SXHcY';

axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

export default KEY;
