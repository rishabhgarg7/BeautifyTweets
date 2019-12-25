import React, { Component } from "react";
import "./TweetCard.css";

class TweetCard extends Component {
  static defaultProps = {
    name: "RishabhGarg",
    im_url:
      "https://pbs.twimg.com/profile_images/1133325132686999552/DoOHq3cR_400x400.png",

    text: "Do the shit, man!"
  };

  render() {
    return (
      <div className="TweetCard block">
        <p>{this.props.name}</p>
        <img src={this.props.im_url} className="image" alt=" " />
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

// {/* alt={this.prop.name} */}

export default TweetCard;
