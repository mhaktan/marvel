import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-bar">
                <div className="col-md-6 col-md-offset-3">
                    <div className="input-group">
                        <input className="form-control input-lg" />
                        <span className="input-group-btn">
                            <button className="btn btn-info input-lg">
                                <i className="glyphicon glyphicon-search" />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchBar;