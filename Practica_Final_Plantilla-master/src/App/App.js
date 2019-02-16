import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Css
import './App.css';
//Components
import Home from "./home"
import Albums from "./albums"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App container">
            <p>
              <NavLink exact activeClassName="active" to="/">Inicio</NavLink>
              {' '}
              <NavLink activeClassName="active" to="/albums">Albums</NavLink>
            </p>
            <hr />
            <Route path="/" exact component={Home} />
            <Route path="/albums" component={Albums} />
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;
