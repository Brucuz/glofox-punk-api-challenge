import React from "react";

class SearchResults extends React.Component{
    render(){
        return (<div className="SearchResults">
            <div className="row">
                <div className="col-sm-2">
                    <img alt="prova"></img>    
                </div>
                <div className="col-sm-10">
                    <h4>Beer Name</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum metus nulla, at scelerisque purus facilisis eget. In quis fermentum turpis, vel mollis nibh. Vivamus pretium efficitur nulla, tincidunt semper purus dignissim quis. Nulla consectetur eros quis iaculis accumsan. Fusce et lectus eu elit tempor cursus.</p>
                </div>
            </div>
        </div>);
    }
}

export default SearchResults;