import React from 'react';
import './video-item.css';

export default class VideoDetails extends React.Component {
  render() {
    const video = this.props.selectedVideo;
    if (!video) {
      return (
        <div className="custom-margin">
          <div className="ui segment">
            Welcome!
          </div>
        </div>
      );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
    <div style={{marginBottom: '20px'}}>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <div className="ui header">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
    );
  }
}
