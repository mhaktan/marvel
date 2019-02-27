import React, { Component } from 'react';
import md5 from 'md5';
import $ from 'jquery';
import CharacterList from './CharacterList';
import Details from './Details';
import SearchBar from './SearchBar';
const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = 'e984a75ed560418f19140c92b0b80006';
const privateKey = 'ee2c8a0e7c9b26843724d413dc306548509bcf85';
const ts = '1';
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`;
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: null,
            selectedCaharacter: null,
        };
    }

    componentDidMount = () => {
        this.GetInitialChararcters();
    };

    handleCharacterSelect = character => {
        console.log(character);
        this.setState({ selectedCaharacter: character })
    }
    GetInitialChararcters() {
        $.getJSON(`${API_URL}/characters?${auth}&limit=5`, result => {
            const characters = result.data.results;
            this.setState({ characters });
        });
    }
    render() {
        if (!this.state.characters) return <h1>Lütfen bekleyiniz...</h1>
        return (
            <div className="container">
                <SearchBar />
                <CharacterList characters={this.state.characters} onCharacterSelect={this.handleCharacterSelect} />
                <Details character={this.state.selectedCaharacter || this.state.characters[0]} />
            </div>

        )
    }
}
export default App;