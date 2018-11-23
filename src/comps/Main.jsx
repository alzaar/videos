import React from 'react';
import SearchBar from './SearchBar'
import KEY from '../apis/youtube'
import axios from 'axios';
import VideoList from './VideoList';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
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
    this.setState({ videos: response.data.items })
  }
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.handleOnFormSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
