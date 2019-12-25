import React, { Component } from "react";
import TweetCard from "./TweetCard";
import "./TweetsContainer.css";

class TweetsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { n_tweets: 10 };
  }

  render() {
    return (
      <div className="TweetContainer">
        {Array.from({ length: this.state.n_tweets }).map(n => (
          <TweetCard />
        ))}
      </div>
    );
  }
}

export default TweetsContainer;
