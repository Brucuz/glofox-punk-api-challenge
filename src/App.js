import React, { Component } from 'react';
import './App.scss';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';
import HighlightedContent from "./components/HighlightedContent";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <h1>Punk API Challenge!</h1>
        <HighlightedContent/>
        <h2>Search</h2>
        <SearchBar />
        <h2>Search results</h2>
      </Container>
    );
  }
}

export default App;
