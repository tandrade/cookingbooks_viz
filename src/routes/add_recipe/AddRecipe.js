import React, { Component } from 'react'
class AddRecipe extends Component {

  renderHeader() {
    return (
      <div className="header">
        <span><div className="title">Pepino</div><div className="subtitle">The recipe manager</div></span>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <p>Add a new recipe here!</p>
      </div>
    );
  }

}

export default AddRecipe;
