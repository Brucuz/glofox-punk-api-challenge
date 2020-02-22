import React from "react";
import punkApi from "../service/punk.service";

class HighlightedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentBeer: 0 };
  }
  async componentDidMount() {
    this.setState({
      currentBeer: await punkApi.getRandomBeer()
    });
  }

  async loadRandomBeer(alcohol) {
    this.setState({
      currentBeer: alcohol
        ? await punkApi.getRandomBeer()
        : await punkApi.getRandomAlcoholFreeBeer()
    });
  }

  render() {
    return (
      <div className="HighlightedContent row">
        <div className="HighlightedContent-image col-md-3 col-xs-12">
          <h3>{this.state.currentBeer.name}</h3>
          <img
            alt={this.state.currentBeer.name}
            src={this.state.currentBeer.image_url}
          ></img>
        </div>
        <div className="HighlightedContent-description col-md-6 col-xs-12">
          <p>{this.state.currentBeer.description}</p>
        </div>
        <div className="HighlightedContent-description col-md-3 col-xs-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.loadRandomBeer(true)}
          >
            Another beer please!
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.loadRandomBeer(false)}
          >
            Another alcohol free please!
          </button>
        </div>
      </div>
    );
  }
}

export default HighlightedContent;
