import React, { Component } from "react";
import MeatballList from "./MeatballListV3";

class MeatballV3Anime extends Component {
//   constructor(...args) {
//     super();
//     this.click = this.click.bind(this);
//     this.state = {
//       allItems: args[0].items,
//       items: args[0].items.filter((item, index) => {
//         if(index == 0 ||index === 1 || index === args[0].items.length - 1) {
//           return item
//         }
//       }),
//       meatballClick: false,
//       class: "meatball-list",
//       active: false
//     };
//   }

//   active = true;

//   generatedListInlineStyle(index) {
//     return {
//       transitionDelay: this.active
//         ? `${index * 0.2 + 0.2}s`
//         : `${index * 0.2 + 0.1}s`
//     };
//   }

//   generatedSpanInlineStyle(index) {
//     return {
//       transitionDelay: this.active ? `${index * 0.2}s` : `${index * 0.2 + 0.2}s`
//     };
//   }

//   renderList() {
//     return this.state.items.map((item, index) => {
//       return (
//         <li
//           className="ani-items items"
//           style={this.generatedListInlineStyle(index)}
//         >
//           <span style={this.generatedSpanInlineStyle(index)}>{item}</span>
//         </li>
//       );
//     });
//   }

//   click() {
//     this.active = !this.active;
//     this.setState({
//       class:
//         this.state.class === "meatball-list"
//           ? "meatball-list actived"
//           : "meatball-list"
//     });
//   }

//   setCategories = () => {
//     this.setState({
//       items: this.props.items.filter((item, index) => {
//         if (index !== 1) {
//           return item;
//         }
//       }),
//       class:
//         this.state.class === "meatball-list"
//           ? "meatball-list actived"
//           : "meatball-list"
//     });
//   }

//   render() {
//     const list = this.renderList();
//     return (
//       <div>
//         <h3 className="meatball-header">Meatball Sub v3</h3>
//         <ol className={this.state.class}>
//           {this.state.items.map((item, index) => (
//             <MeatballList
//               cats={item}
//               key={index}
//               onListClick={this.setCategories}
//             />
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }
constructor() {
        super();
        this.state = {
            items: ['Tabletop', 'BarServeware', 'StuffSnacks', ' Condiment', 'Serveware'],
            meatballClick: false,
            class: 'meatball-list'
        };
        this.click = this.click.bind(this);
    }
    active = true;
    handleClick = () => {
        this.props.onListClick(!this.state.meatballClick);
        console.log(this.props.cats);
    };
    generatedListInlineStyle(index) {
        return {
            transitionDelay: this.active ? `${index * 0.2 + 0.2}s` : `${index * 0.2 + 0.1}s`
        };
    }
    generatedSpanInlineStyle(index) {
        return {
            transitionDelay: this.active ? `${index * 0.2}s` : `${index * 0.2 + 0.2}s`
        };
    }
    renderList() {
        return this.state.items.map((item, index) => {
            return (
                <li className="ani-items items" style={this.generatedListInlineStyle(index)}>
                    <span style={this.generatedSpanInlineStyle(index)}>{item}</span>
                </li>
            );
        });
    }
    click() {
        this.active = !this.active;
        this.setState({
            class: this.state.class === 'meatball-list' ? 'meatball-list actived' : 'meatball-list',
            meatClass: 'hide'
        });
    }
    render() {
        const list = this.renderList();
        return (
          <div>
          <h3 class="meatball-header">Meatball v3</h3>
            <ol className={this.state.class}>
                <li class="items">Home</li>
                <li class={"items " + this.state.meatClass} onClick={this.click} >
                    <svg class="meatballs">
                        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                </li>
                {list}
                <li class="items">Snacks &amp; Condiment Serveware</li>
            </ol>

            </div>
        );
    }
}

export default MeatballV3Anime;
