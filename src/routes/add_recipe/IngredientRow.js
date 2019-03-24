import React, { Component } from 'react';


class IngredientRow extends Component {

  constructor (props) {
    super(props);
    this.state = {
      values: [1.0, "cup", "flour", ""]
    }
  }

  render() {
    return (
      <section>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
      </section>
    );
  }
}

export default IngredientRow;
