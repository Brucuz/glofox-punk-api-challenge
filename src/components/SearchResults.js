import React from "react";
import { connect } from "react-redux";
class SearchResults extends React.Component {
  renderList() {
    if (this.props.beerList.length > 0) {
      return this.props.beerList.map(beer => {
        return (
          <div className="row">
            <div className="col-sm-2">
              <img alt={beer.name} src={beer.image_url}></img>
            </div>
            <div className="col-sm-10">
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
