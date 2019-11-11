import React, { Component } from 'react';
import { render } from 'react-dom';
import Meatballs from './Meatballs';
import SliderList from './SliderList';
import './style.css';

class App extends Component {
 constructor() {
   super();
   this.state = {
     items: ['Home >', 'Tabletop & Bar >','Serveware >', 'Snacks & Condiment Serveware'],
     meatballArr: [<svg className="meatballs"><path d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path></svg>,
    'Home >', 'Tabletop & Bar >','Serveware >', 'Snacks & Condiment Serveware']
   }
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
                {this.state.items.map((item, index) => 
                  <SliderList key={index} item={item} />
                )}
               </ol>
             </nav>
           </div>
         </div>
         <div className='subtitle-container'>
           <Meatballs meatballArr={this.state.meatballArr} />
         </div>
     </div>
   );
 }
}
render(<App />, document.getElementById('root'));