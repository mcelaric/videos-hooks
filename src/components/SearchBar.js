import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    // Need to have state object
    const [term, setTerm] = useState('');

    // Don't need this
    // We'll write inline function in onChange prop
    // for JSX input tag below
    // const onInputChange = event => {
    //     setTerm(event.target.value);
    // };

    // Renamed from class component to avoid naming collision
    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
    };

    
    // Removed all references to 'this' as there is no more 'this'!!!
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        onChange={(event) => setTerm(event.target.value)} 
                        value={term} 
                    />
                </div>
            </form>
        </div>
    );
};

/*

Old class component
Refactored above as functional component
class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        
        //TODO:  Add callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            value={this.state.term} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}
*/

export default SearchBar;