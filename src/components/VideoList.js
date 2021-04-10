import React from 'react';
import VideoItem from './VideoItem'

//props.videos holds the videos we want to display
// deconstruct argument to be able to 
// just reference 'video' instead of 'props.video'
const VideoList = ({ videos, onVideoSelect }) => {
    // map over videos array to create multiple VideoItems
    // to be rendered in this VideoList component
    const renderedList = videos.map((video) => {
        return (
            <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video}
            />
        );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;