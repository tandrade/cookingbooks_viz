import React, { Component } from 'react'
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
    alert("This URL would be submitted: " + this.state.url);
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
        </form>
      </div>
    );
  }

}

export default AddRecipe;
