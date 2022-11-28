import React, { Component } from "react";
import './App.scss';
import { Nav, Pages } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0,
    };
  }

  updatePos = (newPos) => {
    this.setState({ pos: newPos });
  }

  render() {
    return (
      <div className="app-container">
        <Nav pos={this.state.pos} updatePos={this.updatePos} />
        <Pages pos={this.state.pos}>
        </Pages>
      </div>
    );
  }
}
