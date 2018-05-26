import React, { Component } from 'react'

class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pepino</h1>
          <p>A recipe manager</p>
        </header>
        <ul className="App-intro">
          <li>Add a recipe</li>
          <li>View existing recipes</li>
          <li>Meal planning</li>
        </ul>
      </div>
    );
  }

}

export default Home;
