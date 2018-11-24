import React from 'react';
import SearchBar from './SearchBar'
import KEY from '../apis/youtube'
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  handleOnFormSubmit = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 12,
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     })
  }
  componentDidMount() {
    this.handleOnFormSubmit('Bievenue')
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.handleOnFormSubmit}/>
        <VideoDetails selectedVideo={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} videoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}
