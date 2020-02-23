import React from "react";
import { connect } from "react-redux";
import "./SearchResults.scss";
import fallbackBeer from "../assets/images/fallback-beer.png";

class SearchResults extends React.Component {
  renderList() {
    if (this.props.beerList.length > 0) {
      return this.props.beerList.map(beer => {
        return (
          <div className="SearchResults-entry row" key={beer.id}>
            <div className="SearchResults-image col-sm-2 col-xs-12">
              <img alt={beer.name} src={beer.image_url ? beer.image_url : fallbackBeer}></img>
            </div>
            <div className="SearchResults-description col-sm-10 col-xs-12">
              <h4>{beer.name}</h4>
              <p>{beer.description}</p>
            </div>
          </div>
        );
      });
    } else {
      return <div>No beers to show</div>;
    }
  }
  render() {
    return <div className="SearchResults">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    beerList: state.beerList
  };
};

export default connect(mapStateToProps, null)(SearchResults);
