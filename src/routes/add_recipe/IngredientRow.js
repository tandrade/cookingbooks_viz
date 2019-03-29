import React, { Component } from 'react';

const quantityRegex = RegExp("[0-9]+([./]?[0-9]+)?");
const ingredientRegex = RegExp(".*[A-Za-z]+.*");


class IngredientRow extends Component {

  measurementOptions = [];  // TODO: get canonical references from python code

  constructor(props) {
    super(props)
    this.state = {
      quantity: null,
      quantityError: true,
      ingredient: null,
      ingredientError: true,
      measurement: null,
      description: null,
    }
  }

  checkIfValidInput = () => {
    // description is nullable and does not need to be checked
    const {
      quantity,
      ingredient,
      measurement,
      quantityError,
      ingredientError
    } = this.state;
    if (quantity && ingredient && measurement && !quantityError && !ingredientError) {
      this.props.onClean();
    } else {
      this.props.onUnclean();
    }
  }

  onChangeQuantity = (val) => {
    const error = val && quantityRegex.test(val);
    this.setState({
      ...this.state,
      quantity: val,
      quantityError: error
    });
    this.checkIfValidInput();
  }

  onChangeIngredient = (val) => {
    // could be DRYed up with above, but maybe more readable this way...
    const error = val && ingredientRegex.test(val);
    this.setState({
      ...this.state,
      ingredient: val,
      ingredientError: error
    });
    this.checkIfValidInput();
  }

  onChangeMeasurement = (val) => {
    this.setState({
      ...this.state,
      measurement: val,
    })
    this.checkIfValidInput();
  }

  onChangeDescription = (val) => {
    this.setState({
      ...this.state,
      description: val
    })
    this.checkIfValidInput()
  }

  render() {
    return (
      <section>
        <input onChange={this.onChangeQuantity} type="text"></input>
        <input onChange={this.onChangeMeasurement} type="text"></input>
        <input onChange={this.onChangeIngredient} ype="text"></input>
      </section>
    );
  }
}

export default IngredientRow;
