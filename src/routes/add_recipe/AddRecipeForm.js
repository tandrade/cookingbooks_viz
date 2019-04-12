import React, { Component } from 'react';
import IngredientRow from './IngredientRow'


class AddRecipeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClean = (i, data) => {
    const ingredients = [...this.state.ingredients];
    ingredients[i] = data;
    this.setState({
      ingredients: ingredients
    })
  }

  onUnclean = (i) => {
    const ingredients = [...this.state.ingredients]
    ingredients[i] = {}
    this.setState({
      ingredients: ingredients
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  renderIngredientList = () => {
    const { ingredients } = this.state;
    return (
      <div>
        <p>Live ingredient list:</p>
        {ingredients.map((ingredient, i) => {
          if (!ingredient) {
            return (<div key={i}>-</div>);
          }
          return (<div key={i}>{ingredient.quantity} {ingredient.measurement} {ingredient.ingredient}</div>);
        })}
      </div>
    )
  }

  addRow = (evt) => {
    const ingredients = [...this.state.ingredients];
    ingredients.push({});
    this.setState({
      ingredients: ingredients
    });
    evt.preventDefault();
  }

  removeRow = (rowIndex) => {
    const newIngredients = this.state.visibleIngredients.filter((ingredient, i) => i !== ingredient)
    this.setState({
      ...this.state,
      visibleIngredients: newIngredients
    })
  }

  onSubmit = () => {
    const recipeData = this.state.visibleIngredients;
    if (!recipeData) {
      this.setState({
        errors: ["Could not validate recipe data."]
      });
    }
    // FIXME: get real data and the real API here
    fetch("http://localhost:8000/recipes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeData)
    }).then((resp) => {
      this.setState({
        recipeId: resp.data.id
      })
    });
  }

  renderSuccess = (recipeId) => {
    return (
      <div>
        Your recipe has been successfully created! <a href="/recipes/{id}">View it here.</a>
      </div>
    )
  }

  renderErrors = (errors) => {
    return (
      <div>Your recipe could not be created. Please try again.</div>
    )
  }

  render() {
    const { ingredients, errors, recipeId } = this.state;
    const ingredientsWithExtra = ingredients.length + 1;


    return (
      <div>
      {Boolean(recipeId) && this.renderSuccess() }
      {Boolean(errors) && this.renderErrors() }
        <form onSubmit={this.handleSubmit}>
          <label>Ingredients</label>
            <button title="Add" onClick={this.addRow} />
            {
              [...Array(ingredientsWithExtra)].map((e, i) => {
                return (<IngredientRow index={i} key={i} onClean={this.onClean} onUnclean={this.onUnclean} />);
              })
            }
          <label>Instructions</label>
            <input className="widetext" type="text"/>
          <input type="submit" value="Submit" />
        </form>
        {this.renderIngredientList()}
      </div>
    );
  }
}

export default AddRecipeForm;
