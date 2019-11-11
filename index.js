import React, { Component } from 'react';
import { render } from 'react-dom';
import Meatballs from './Meatballs';
import './style.css';

class App extends Component {
 constructor() {
   super();
   this.state = {
     items: ['Home >','Tabletop & Bar >','Serveware >','Snacks & Condiment Serveware']
   };
}

 render() {
   return (
       <div className='subtitle-container'>
         <h2>Breadcrumb Workshop</h2>
         <hr />
         <div className='header-container'>
           <h3>Slider</h3>
         </div>
         <div className="breadcrumb-container">
           <div>
             <nav className="breadcrumb-container">
               <ol className="breadcrumbs">
                 <li className="items">{this.state.items}</li>
               </ol>
             </nav>
           </div>
         </div>
         <div className='subtitle-container'>
           <Meatballs maxItems={2} />
         </div>
     </div>
   );
 }
}
render(<App />, document.getElementById('root'));