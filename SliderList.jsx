import React, { Component } from 'react';

class SliderList extends Component {
  constructor(...args){
  }

  handleClick = () => {
    console.log(this.props.item);
  }
  
 render() {
    return (
      <li className='items' onClick={this.handleClick}>
        {this.props.item} 
      </li>
    )
 }
};

export default SliderList;