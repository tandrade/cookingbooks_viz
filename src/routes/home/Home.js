import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="Home-titleslide">
          <h1>Pepino</h1>
          <p>A recipe manager</p>
        </div>
        <div className="Home-navigation">
          <ul className="Home-links">
            <li>Add a recipe</li>
            <li>View existing recipes</li>
            <li>Meal planning</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Home;
