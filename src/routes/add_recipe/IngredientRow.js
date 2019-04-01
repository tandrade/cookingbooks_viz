import React, { Component } from 'react';

const quantityRegex = RegExp("[0-9]+([./]?[0-9]+)?");
const ingredientRegex = RegExp(".*[A-Za-z]+.*");


class IngredientRow extends Component {

  measurementOptions = [
    'tsp',
    'tbsp',
    'g',
    'cup',
    'qt',
    'oz',
    'lb',
    'ct'
  ]

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
      this.props.onClean(this.props.index, {
        quantity: quantity,
        ingredient: ingredient,
        measurement: measurement
      });
    } else {
      this.props.onUnclean();
    }
  }

  onChangeQuantity = (val) => {
    const matches = val && quantityRegex.test(val);
    this.setState({
      ...this.state,
      quantity: val,
      quantityError: !matches
    });
    this.checkIfValidInput();
  }

  onChangeIngredient = (val) => {
    // could be DRYed up with above, but maybe more readable this way...
    const matches = val && ingredientRegex.test(val);
    this.setState({
      ...this.state,
      ingredient: val,
      ingredientError: !matches
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
        <input onChange={(evt) => this.onChangeQuantity(evt.target.value)} type="text"></input>
        <select onChange={(evt) => this.onChangeMeasurement(evt.target.value)} type="dropdown">
          {
            this.measurementOptions.map((option) => {
              const readableValue = option === 'ct' ? '-' : option;
              return (<option value={option}>{readableValue}</option>);
            })
          }
        </select>
        <input onChange={(evt) => this.onChangeIngredient(evt.target.value)} ype="text"></input>
      </section>
    );
  }
}

export default IngredientRow;
