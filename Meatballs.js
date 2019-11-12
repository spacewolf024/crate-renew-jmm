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
      }),
      meatballPicArray: [
        'https://www.geek.com/wp-content/uploads/2019/08/meatball-625x352.jpg',
        'https://www.antifoodie.com/wp-content/uploads/2013/11/best-fast-food-meatball-subs.jpg',
        'https://amindfullmom.com/wp-content/uploads/2019/01/Easy-Homemade-Meatball-Sub.jpg',
        'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps34411_TH967125D31B-1.jpg',
        'https://www.cook2eatwell.com/wp-content/uploads/2018/05/Italian-Sausage-Meatball-Subs.jpg'
      ],
      count: 0,
      meatballPic: ''
    };
  }

  setCategories(val) {
    this.state.count++;
    this.props.onSubClick(false);

    if(val) {
      this.setState({meatballArr: this.props.meatballArr});
    } else {
        this.setState({
          meatballArr: this.props.meatballArr.filter((item, index) => {
          if (index === 0 || index >= this.props.meatballArr.length - 2) {
            return item
          }
        })
      });
    }

    if(this.state.count >= 5) {
      let rando = (Math.floor(Math.random() * Math.floor(this.state.meatballArr.length)));
      rando = this.state.meatballPic ? (Math.floor(Math.random() * Math.floor(this.state.meatballArr.length))) : rando;
      this.state.meatballPic = this.state.meatballPicArray[rando];
    }
  }
 
 render() {

    return (
      <div>
        <h3 className='meatball-header'>Meatball Sub</h3>
        <div>
          <nav className="meatball-container">
            <ol className="meatball-list">
              {this.state.meatballArr.map((item, index) => 
                <MeatballList cats={item} key={index} onListClick={this.setCategories}/>
              )}
            </ol>
          </nav>
        </div>
        <img className='sub-pic' src={this.state.meatballPic} />
      </div>
    )
 }
};

export default Meatballs;