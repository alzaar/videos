import React from 'react';

export default class VideoDetails extends React.Component {
  render() {
    const video = this.props.selectedVideo;
    if (!video) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        {video.snippet.title}
      </div>
    );
  }
}
