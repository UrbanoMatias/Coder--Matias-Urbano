import './App.css'
import React from 'react';
import {NavBar} from './components/navbar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import { ItemsListContainer } from './components/itemsListContainer/itemsListContainer';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Button>Click Me</Button>
      <ItemsListContainer greeting="Completando el desafio"/>
    </div>
  );
}

export default App;
