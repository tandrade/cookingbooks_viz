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

  onClean (i, data) {
    const ingredients = [...this.state.ingredients]
    ingredients[i] = data
    this.setState({
      ingredients: ingredients
    })
  }

  onUnclean (i) {
    const ingredients = [...this.state.ingredients]
    ingredients[i] = {}
    this.setState({
      ingredients: ingredients
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
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

  render() {
    const { ingredients } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Ingredients</label>
          {ingredients.map((ingredient, i) =>
            <IngredientRow key={i} onClean={this.onClean} onUnclean={this.onUnclean} />
          )}
          <button title="Add" onClick={this.addRow} />
          <IngredientRow />
        <label>Instructions</label>
          <input className="widetext" type="text"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddRecipeForm;
