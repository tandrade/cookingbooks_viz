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
            <li>&#9632; Add a recipe</li>
            <li>&#9632; View existing recipes</li>
            <li>&#9632; Meal planning</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Home;
