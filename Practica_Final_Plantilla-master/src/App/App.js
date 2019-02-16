import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Css
import './App.css';
//Components
import Home from "./home"
import Albums from "./albums"
import Form from "./form"

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
              <div className="row justify-content-between">
              <div className="col-12">
                  <ul className="nav justify-content-center">
                    <li classNamenav-link="nav-item"><NavLink className="nav-link" exact activeClassName="active" to="/">Inicio</NavLink></li>
                      {' '}
                    <li classNamenav-link="nav-item"><NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink></li>
                    <li classNamenav-link="nav-item"><NavLink className="nav-link" activeClassName="active" to="/reproductor">Reproductor</NavLink></li>

                    <li classNamenav-link="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                    </li>
                  </ul>
                 
              </div>
            </div>
            </p>
            <hr />
            <Route path="/" exact component={Home} />
            <Route path="/albums" component={Albums} />
            <Route path="/login" component={Form} />
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;
