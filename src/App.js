import './App.css';
import React, { useState, useEffect }  from "react";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { ItemsMock } from "./components/ItemsMock.jsx";


function App() {
  
  const [listItems, setListItems] = useState([]);
  
  useEffect(() => {
    ItemsMock.getListItems()
      .then((data) => setListItems(data))
      .catch((err) => console.log(err));    
  }, [])

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer items={listItems} description="Cursos" onAddHandler={(a,b)=>(console.log("se agregó al carrito"))}/>
    </div>
  );
}

export default App;