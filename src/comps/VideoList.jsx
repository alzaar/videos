import React from 'react';
import Video from './VideoItem';
export default class VideoList extends React.Component {


  render() {
    const videos = this.props.videos.map((video) => {
      return (

            <Video key={video.id.videoId} video={video} />

      );
    });
    return (

        <div className="container">
          <div className="row">
            {videos}
          </div>
        </div>

    );
  }
}
