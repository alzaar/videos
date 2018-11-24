import React from 'react';

export default class VideoDetails extends React.Component {
  render() {
    const video = this.props.selectedVideo;
    if (!video) {
      return (
        <div className="ui segment">Loading...</div>
      );
    }
    return (
      <div className="ui segment">
        <div className="ui header">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
