import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
//import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {

    //const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Now use custom hook
    // Remember, this will cause App component to rerender
    //      any time we get a new list of videos (THE SECOND ARG!!!)
    const [videos, search] = useVideos('shiba inu');

    useEffect (() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    
    // setSelectedVideo(response.data.items[0]);
    
    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // };


    
    

    // Again, remove all references to 'this.state' as there's no 'this' anymore
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"> 
                    <VideoDetail video={selectedVideo} />                
                    </div>
                    <div className="five wide column">
                    <VideoList 
                        onVideoSelect={setSelectedVideo} 
                        videos={videos} 
                    />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default App;

/*

    // setSelectedVideo(response.data.items[0]);
    
    // Commented code went into custom hook from here
    // useEffect(() => {
    //     onTermSubmit('cute puppies');
    // }, []);

    // const onTermSubmit = async (term) => {

    //     const response =  await youtube.get('/search',  {
    //         params: {
    //             q: term
    //         }
    //     });
        
    //     setVideos(response.data.items);
    //     setSelectedVideo(response.data.items[0]);
    // };   




// REMEMBER div classNames are semantic ui for styling

Refactored from class component to the above functional component
class App extends React.Component {
    state = { videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('cute puppies');
    }
    
    onTermSubmit = async term => {
        //console.log(term);
        const response =  await youtube.get('/search',  {
            params: {
                q: term
            }
        });

        // In YouTube API response
        // the video info we want is in 'data.items'
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    };
    
    render () {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"> 
                        <VideoDetail video={this.state.selectedVideo} />                
                        </div>
                        <div className="five wide column">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos} 
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
*/
