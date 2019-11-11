import React, { Component } from 'react';

class MeatballList extends Component {
  constructor(...args){

  }

  // .filter((item, index) => {
      //   if (index === 0 || index >= this.props.cats.length - 2) {
      //     return item
      //   }
      // })

  handleClick = () => {
    console.log(this.props.cats);
    if(this.props.cats.type == 'svg') {
      this.props.onListClick(true);
    }
  }
   
 render() {
    return (
      <li className='items' onClick={this.handleClick} >
        {this.props.cats}
      </li>
    )
 }
};

export default MeatballList;
