import React, { Component } from "react";

export default class RecipeSearch extends Component {
  state = {
    search: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ search: "" });
    this.props.handleSubmit(this.state.search);
  };
  handleChange = e => {
    this.setState({ search: e.target.value });
    this.props.handleChange(this.state.search);
  };
  render() {
    return (
      <div className=" format-search pt-2 pb-3 container mt-3">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto text-left">
            <div className="blockquote">
              <h1 className="format-search_heading text-slanted text-light">
                <i className=" format-head_icon material-icons">
                  restaurant_menu
                </i>
                SuperCook
              </h1>
              <footer className="blockquote-footer">
                <cite title="Source Title">
                  Search By Ingredients You Have At Home
                </cite>
              </footer>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-8 mx-auto text-center">
            <form onSubmit={this.handleSubmit} className="mt-5">
              <label htmlFor="search" className="text-info">
                Type recipes separated by a comma
              </label>
              <br />
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  id="search"
                  name="search"
                  placeholder="poutine,chicken,eggs"
                  value={this.state.search}
                  onChange={this.handleChange}
                />
                <i className="search-icon material-icons">search</i>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
