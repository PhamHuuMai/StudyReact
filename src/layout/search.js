import React, { Component } from 'react';
class Search extends Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {

        console.log(this.props)
    }

    render() {
        return (
            <form className="navbar-form navbar-right" role="search">
                <div className="form-group input-group">
                    <input type="text" className="form-control" placeholder="Search.." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.search}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                    {this.props.hehe}
                </div>
            </form>
        );
    };
}

export default Search;