import { useEffect, useState} from 'react';
import youtube from '../apis/youtube';


// Remember this sentence
// If you give me a list of inputs,
// I will give you a list of outputs
// Here
//      input -  is the search term defaultSearchTerm
//      output - the videos from YT, and the function to search for videos

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    
    // React wants the input to be used in the arrow function
    // [defaultSearchTerm]
    // this takes care of possible stale data
    useEffect(() => {
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async (term) => {
        const response =  await youtube.get('/search',  {
            params: {
                q: term
            }
        });
        
        setVideos(response.data.items);
        
    }; 

    // This is the list of outputs
    return [videos, search];
};

export default useVideos;