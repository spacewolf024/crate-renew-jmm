import React, { Component } from 'react';

class MeatballList extends Component {
  constructor(){
    this.state ={ meatballClick: false };
  }

  handleClick = () => {
    if(this.props.cats.type == 'svg') {
      this.props.onListClick(!this.state.meatballClick);
      this.setState({meatballClick: !this.state.meatballClick});
    } else {
      console.log(this.props.cats);
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
