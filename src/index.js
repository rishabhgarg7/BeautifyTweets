import React, { Component } from "react";
import ReactDOM from "react-dom";
import TweetsContainer from "./TweetsContainer";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "rishabh_grg" };
    this.fetchtweets = this.fetchtweets.bind(this);
  }

  fetchtweets() {}

  render() {
    return (
      <div className="App">
        <p> IndieHacker</p>
        <input type="text" placeholder="Twitter username" />
        <button onClick={this.fetchtweets} type="submit">
          Search!
        </button>
        <br />
        <TweetsContainer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
