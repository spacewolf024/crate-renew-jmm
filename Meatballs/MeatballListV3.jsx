import React, { Component } from "react";

class MeatballListV3 extends Component {
  constructor() {
    this.state = { meatballClick: false };
  }

  handleClick = () => {
    this.props.onListClick(!this.state.meatballClick);
    console.log(this.props.cats);
  };

  render() {
    return (
      <li className="items-anime" onClick={this.handleClick}>
       <a href="#">{this.props.cats}</a>
      </li>
    );
  }
}

export default MeatballListV3;
