import React from 'react';
import './video-item.css'
export default class VideoItem extends React.Component {
  onClick = () => {
    
  }
  render() {
    const video = this.props.video
    return (

	        <div className="col-md-4">
    		    <div className="card mb">
              <img className="card-img-top" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className="card-body mb">
                  <h5 className="card-title">{video.snippet.title}</h5>
                  <p className="card-text">{video.snippet.description}</p>
                  <button onClick={this.onClick} type="button" className="btn btn-primary mb">Play</button>
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
