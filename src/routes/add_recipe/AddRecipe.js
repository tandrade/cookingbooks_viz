import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRecipeForm from './AddRecipeForm'


class AddRecipe extends Component {

  renderHeader() {
    return (
      <div className="header">
        <span><div className="title">Pepino</div><div className="subtitle">The recipe manager</div></span>
      </div>
    )
  }

  render() {
    /*
    Commented out render function:
    */
    return (
      <div>
        { this.renderHeader() }
        <p>Add a new recipe here!</p>
        <AddRecipeForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploadedRecipe: state.submittedRecipe
  };
};

export default connect(mapStateToProps)(AddRecipe);
