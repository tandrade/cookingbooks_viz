import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="Home-titleslide">
          <div className="Home-logo">
            <h1>Pepino</h1>
            <p>A recipe manager</p>
          </div>
        </div>
        <div className="Home-navigation">
          <ul className="Home-links">
            <li><a href="/add_recipe">&#9632; Add a recipe</a></li>
            <li>&#9632; View existing recipes</li>
            <li>&#9632; Meal planning</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Home;
