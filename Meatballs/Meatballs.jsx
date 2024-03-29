import React, { Component } from "react";
import MeatballList from "./MeatballList";

class Meatballs extends Component {
  constructor(...args) {
    this.setCategories = this.setCategories.bind(this);
    this.state = {
      meatballArr: args[0].meatballArr.filter((item, index) => {
        if (index === 0 || index >= args[0].meatballArr.length - 2) {
          return item;
        }
      }),
      rowClass: "",
      meatballPicArray: [
        "https://www.geek.com/wp-content/uploads/2019/08/meatball-625x352.jpg",
        "https://www.antifoodie.com/wp-content/uploads/2013/11/best-fast-food-meatball-subs.jpg",
        "https://amindfullmom.com/wp-content/uploads/2019/01/Easy-Homemade-Meatball-Sub.jpg",
        "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps34411_TH967125D31B-1.jpg",
        "https://www.cook2eatwell.com/wp-content/uploads/2018/05/Italian-Sausage-Meatball-Subs.jpg"
      ],
      count: 0,
      meatballPic: "",
      hidePicClass: 'hide'
    };
  }

  setCategories(val) {
    this.state.count++;
    if (val) {
      this.setState({
        meatballArr: this.props.meatballArr,
        rowClass: "expanded"
      });
    } else {
      this.setState({
        meatballArr: this.props.meatballArr.filter((item, index) => {
          if (index === 0 || index >= this.props.meatballArr.length - 2) {
            return item;
          }
        }),
        rowClass: ""
      });
    }

    if (this.state.count >= 3) {
      let rando = Math.floor(
        Math.random() * Math.floor(this.state.meatballArr.length)
      );
      this.setState({hidePicClass: ''});
      rando =
        this.state.meatballPic === this.state.meatballArr[rando]
          ? Math.abs(this.state.meatballArr.length - 1 - rando -1)
          : rando;
      
      this.state.meatballPic = this.state.meatballPicArray[rando];
    }
  }

  render() {
    return (
      <div>
        <h3 className="meatball-header">Meatball Sub V1</h3>
        <div>
          <nav className={"meatball-container " + this.state.rowClass}>
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

export default Meatballs;
