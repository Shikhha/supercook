import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=ddbcb0dab19abf84d962c287b1e775e9&rId=${
        this.props.id
      } `
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({ recipe: jsonData.recipe });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3">
            <button
              onClick={() => this.props.handleIndex(1)}
              type="button"
              className="format-details__button mb-5 btn text-warning text-capitalize"
            >
              <i className="format large material-icons">arrow_back</i> back to
              recipes
            </button>
            <div className="card p-2 shadow-sm format-recipe__card">
              <img
                src={image_url}
                className="card-img-top w-100"
                style={{ maxHeight: "20rem", borderRadius: "25px" }}
              />
              <div className="card-body">
                <h6 className="text-capitalize">{title}</h6>
                <h6 className="text-slanted text-warning">
                  Provided By: {publisher}
                </h6>
                <a
                  href={publisher_url}
                  className="text-danger details-link  btn btn-outline-danger mr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Publisher's Blog
                  <i className="details-link-icon material-icons">public</i>
                </a>
                <a
                  href={source_url}
                  className=" ml-2  btn details-link btn-outline-danger text-danger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go To Source
                  <i className=" details-link-icon material-icons">
                    arrow_forward
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-6 mx-auto my-3" alt="recipe">
            <ul className="list-group p-2 mt-5 list-group-flush">
              <h1 className="">Ingredients</h1>
              {ingredients.map(ingredient => {
                return (
                  <li className="list-group-item text-slanted" key={ingredient}>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
