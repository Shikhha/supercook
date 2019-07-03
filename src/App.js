import React from "react";
import "./App.css";
import { recipes } from "./tempLists";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=9ff2a67fc62a50637e9f24bd139baaa9",
    base_url:
      "https://www.food2fork.com/api/search?key=9ff2a67fc62a50637e9f24bd139baaa9",
    details_id: "",
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  setPageIndex(index) {
    this.setState({ pageIndex: index });
  }
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState({ error: "Sorry your search didn't return any results" });
      } else {
        this.setState({ recipes: jsonData.recipes });
      }
    } catch (err) {
      console.log("error: ", err);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }
  handleRecipe = (id, index) => {
    this.setState({ pageIndex: index, details_id: id });
  };
  handleIndex = index => {
    this.setState({ pageIndex: index });
  };
  handleChange = change => {
    this.setState({ search: change });
  };

  handleSubmit = entered => {
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}${query}${search}`, search: "" };
      },
      () => {
        console.log("inside");
        this.getRecipes();
      }
    );
  };
  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleRecipe={this.handleRecipe}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            error={this.state.error}
          />
        );
      case 2:
        return (
          <RecipeDetail
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };
  render() {
    //console.log(this.state.recipes);
    return <div>{this.displayPage(this.state.pageIndex)}</div>;
  }
}
