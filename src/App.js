import React from 'react';
import logo from './bdmp.png';
import './App.css';
import Signup from './Signup';
function App() {
 return (
 <div className="App">
 <header className="App-header">
 <img src={logo} height={20} width={70} className="App-logo" alt="logo" />
 <Signup/>
 </header>
 </div>
 );
}
export default App;
