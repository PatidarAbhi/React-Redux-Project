import logo from './logo.svg';
import './App.css';
import SideBar from './functionComp/SideBar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Display from './functionComp/Display';

function App() {
  
  return (
    <div className="App">
      <SideBar></SideBar>
      <Display></Display>
    </div>
  );
}

export default App;
