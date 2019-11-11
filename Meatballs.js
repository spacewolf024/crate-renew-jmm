import React, { Component } from 'react';
import MeatballList from './MeatballList';

class Meatballs extends Component {

  constructor(...args) {
   this.setCategories = this.setCategories.bind(this);
    this.state = {
      meatballArr: args[0].meatballArr.filter((item, index) => {
        if (index === 0 || index >= args[0].meatballArr.length - 2) {
          return item
        }
      })
    }
  }

  setCategories(val) {
    console.log(val)
    if(val) {
      this.setState({meatballArr: this.props.meatballArr});
    } else {
        this.setState({
          meatballArr: this.props.meatballArr.filter((item, index) => {
          if (index === 0 || index >= this.props.meatballArr.length - 2) {
            return item
          }
        })
      })
    }
  }
 
 render() {

    return (
      <div>
        <h3 className='meatball-header'>Meatballs</h3>
        <div>
          <nav className="meatball-container">
            <ol className="meatball-list">
              {this.state.meatballArr.map((item, index) => 
                <MeatballList cats={item} key={index} onListClick={this.setCategories}/>
              )}
            </ol>
          </nav>
        </div>
      </div>
    )
 }
};

export default Meatballs;