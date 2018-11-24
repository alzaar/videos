import React from 'react';
import './video-item.css'
export default class VideoItem extends React.Component {
  onClick = () => {
    let v1 = this.props.video;
    this.props.videoSelect(v1);
  }
  render() {
    const video = this.props.video
    return (
      <div key={video.id.videoId} className="col-md-4">
        <div className="ui card custom">
          <div className="image">
            <img onClick={this.onClick} src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.description}/>
          </div>
          <div className="content">
            <h4 onClick={this.onClick} className="header">{video.snippet.title}</h4>
            <div className="description">
              {video.snippet.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// <div className="item">
//   <img className="ui image" src={this.props.video.snippet.thumbnails.default.url}
//     alt={this.props.video.snippet.description}/>
//   <div className="content">
//   <div className="header">{this.props.video.snippet.title}</div>
//   </div>
// </div>
