import React, { Component } from 'react';
import IngredientRow from './IngredientRow'


class AddRecipeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nIngredients : 0
    };
  }

  addRow = (evt) => {
    this.setState({
      ...this.state,
      nIngredients: this.state.nIngredients + 1
    });
    evt.preventDefault();
  }

  render() {
    const { nIngredients } = this.state;
    let completedIngredients = [];
    for (let i=0; i < nIngredients; i++) {
      completedIngredients.push(<IngredientRow key={i}/>);
    }
    return (
      <form>
        <label>Ingredients</label>
          { completedIngredients }
          <button title="Add" onClick={this.addRow} />
          <IngredientRow />
        <label>Instructions</label>
          <input className="widetext" type="text"/>
      </form>
    );
  }
}

export default AddRecipeForm;
