import React, { Component } from "react";
import { render } from "react-dom";
import Meatballs from "./Meatballs/Meatballs";
import Meatballv2 from "./Meatballs/MeatballV2";
import Meatballv3 from "./Meatballs/MeatballV3";
import Meatballv4 from "./Meatballs/MeatballV4";
import SliderList from "./SliderList";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      items: [
        "Home >",
        "Tabletop & Bar >",
        "Serveware & more & more & more stuff >",
        "Snacks & Condiment Serveware"
      ],
      meatballArr: [
        <svg className="meatballs">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>,
        "Home >",
        "Tabletop & Bar >",
        "Serveware >",
        "Snacks & Condiment Serveware"
      ],
      meatballArr2: [
        <svg className="meatballs">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>,
        "Home >",
        "Tabletop & Bar >",
        "Serveware >",
        "Snacks & Condiment Serveware"
      ]
    };
  }

  clickHandler = (val) => {
    if (val) {
      this.setState({ meatballArr2: this.state.meatballArr2.shift() });
    }
  };

  render() {
    return (
      <div className="subtitle-container">
        <h2>Breadcrumb Workshop</h2>
        <hr />
        <div className="meatball-header">
          <h3>Slider</h3>
        </div>
        <div>
          <div>
            <nav className="breadcrumb-container">
              <ol className="breadcrumbs">
                {this.state.items.map((item, index) => (
                  <SliderList key={index} item={item} />
                ))}
              </ol>
            </nav>
          </div>
        </div>
        <div className="subtitle-container">
          <Meatballs
            meatballArr={this.state.meatballArr}
          />
        </div>
        <div className="subtitle-container">
          <Meatballv2
            meatballArr={this.state.meatballArr2}
            onSubClick={this.clickHandler}
          />
        </div>
        <div className="subtitle-container">
          <Meatballv3
            meatballArr={this.state.items}
          />
        </div>
        <div className="subtitle-container">
          <Meatballv4
            meatballArr={this.state.items}
            
          />
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));

//
