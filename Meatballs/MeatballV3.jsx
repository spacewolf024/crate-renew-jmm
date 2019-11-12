import React, { Component } from "react";
import MeatballList from "./MeatballList";

class MeatballV3 extends Component {
  constructor(...args) {
    this.setCategories = this.setCategories.bind(this);
    this.state = {
      meatballArr: args[0].meatballArr.filter((item, index) => {
        if (index === 0 || index === args[0].meatballArr.length - 1) {
          return item;
        }
      })
    };
    this.state.meatballArr.splice(
      1,
      0,
      <svg className="meatballs">
        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    );
  }

  setCategories(val) {
    if (val) {
      this.setState({ meatballArr: this.props.meatballArr });
    } else {
      this.setState({
        meatballArr: this.props.meatballArr.filter((item, index) => {
          if (index === 0 || index >= this.props.meatballArr.length - 2) {
            return item;
          }
        })
      });
    }
  }

  render() {
    return (
      <div>
        <h3 className="meatball-header">Meatball Sub V3</h3>
        <div>
          <nav className="meatball-container">
            <ol className="meatball-list">
              {this.state.meatballArr.map((item, index) => (
                <MeatballList
                  cats={item}
                  key={index}
                  onListClick={this.setCategories}
                />
              ))}
            </ol>
          </nav>
        </div>
      </div>
    );
  }
}

export default MeatballV3;
