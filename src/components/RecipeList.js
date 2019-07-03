import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const { recipes, error } = this.props;
    return (
      <div>
        <RecipeSearch
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
        />
        <div className="container  my-5 pt-2">
          <div className="row">
            <div className=" mb-5 col-10 mx-auto col-md-6 text-center">
              <h1 className=" recipe-list-text text-slanted">
                <i className=" material-icons">arrow_right</i>Super Recipe's{" "}
                <i className=" material-icons">arrow_left</i>
              </h1>
            </div>
          </div>
          <div className="row">
            {error ? (
              <h4 className="text-slanted mx-auto text-danger">{error}</h4>
            ) : (
              <div className="col-12">
                <div className="card-columns">
                  {recipes.map(recipe => {
                    return (
                      <Recipe
                        handleRecipe={this.props.handleRecipe}
                        recipe={recipe}
                        key={Math.random()}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
