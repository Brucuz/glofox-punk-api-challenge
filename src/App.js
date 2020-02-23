import React, { Component } from 'react';
import './App.scss';
import 'typeface-roboto';
import HighlightedContent from "./components/HighlightedContent/HighlightedContent";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <h1>Punk API Challenge!</h1>
        <HighlightedContent/>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default App;
