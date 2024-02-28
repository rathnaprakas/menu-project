import './App.css';
import Categories from './Categories';
import Menu from './Menu';
import menu from './data';
import {useState} from 'react';

function App() {
  let [category,setCategory]=useState("All");
  let categorySelector=(k)=>{
    setCategory(k)
  }
  let newmenu=menu
  if (category!=="All")
  {newmenu=menu.filter(i=>i.category===category)}
  return (
    <div className='menu section'>
      <div className='title'>
      <h2>Our Menu</h2>
      <div className='underline'></div>
      </div>
      <Categories categorySelector={categorySelector}/>
      <div className='section-center'>
      {newmenu.map(i=><Menu key={i.id} {...i}/>)}
      </div>
    </div>
  );
}

export default App;
