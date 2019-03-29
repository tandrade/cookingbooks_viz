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
    const { ingredients } = this.state
    return (
      <div>
        <p>Live ingredient list:</p>
        {ingredients.forEach((ingredient) => {
          return (<div>{ingredient}</div>);
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

  render() {
    const { ingredients } = this.state;
    const ingredientsWithExtra = ingredients.length + 1;

    return (
      <div>
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
