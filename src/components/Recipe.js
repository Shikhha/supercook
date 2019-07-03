import React, { Component } from "react";

export default class Recipe extends Component {
  handleClick = recipe_id => {
    this.props.handleRecipe(recipe_id);
  };
  render() {
    const { handleRecipe } = this.props;
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    return (
      <div>
        <div className="card shadow-sm format-recipe__card p-1 mx-auto">
          <img
            className="card-img-top"
            src={image_url}
            alt="Card image cap"
            style={{ maxHeight: "20rem", borderRadius: "25px" }}
          />
          <div className="card-body text-capitalize">
            <button
              onClick={() => handleRecipe(recipe_id, 2)}
              className="format-details__button"
            >
              <h6 className="format-text text-secondary">{title}</h6>
            </button>
            <h6 className=" mt-1 text-info text-slanted">
              Provided by: {publisher}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
