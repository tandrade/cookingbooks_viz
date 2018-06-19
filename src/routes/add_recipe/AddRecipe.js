import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as recipeActions from '../../data/actions/submittedRecipeActions';

class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "url": ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      url: event.target.value
    })
  }

  handleSubmit(event) {
    const { url } = this.state;
    const { dispatch } = this.props;
    if (url) {
      dispatch(recipeActions.submitRecipe);
    } else {
      alert("invalid URL!");
    }
    event.preventDefault();
  }

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
        <form onSubmit={this.handleSubmit}>
          <label>URL:
            <input type="text" value={this.state.url} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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
