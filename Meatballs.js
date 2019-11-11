import React, { Component } from 'react';
class Meatballs extends Component {
 constructor(props) {
   this.state = {
     items: ['Home >','Tabletop & Bar >','Serveware >','Snacks & Condiment Serveware']
   };
   this.state.filteredItems = this.state.items.filter((item, index) => {
     if(index === this.state.items.length - 1 || index === this.state.items.length - 2) {
       <li key={index}>{item}</li>
     }
   });
 }
 render() {
   return (
     <div>
       <h3 className='meatball-header'>Meatballs</h3>
       <div>
         <nav className="breadcrumb-container">
           <ol className="breadcrumbs">
             <li className="items">{this.state.filteredItems}</li>
           </ol>
         </nav>
       </div>
     </div>
   )
 }
};
export default Meatballs;