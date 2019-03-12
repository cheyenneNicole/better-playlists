import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let textColor = "#fff";
let defaultStyle={
  color: textColor
}
class Aggregate extends Component {
  render(){
    return (
      <div style={{...defaultStyle, width:"40%", display: 'inline-block'}}>
        <h2 style ={defaultStyle}>Number Text</h2>
      </div>
    );
  }
}
class Filter extends Component{
  render(){
    return(
      <div style = {defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}
class Playlist extends Component{
  render(){
    return(
      <div style ={{...defaultStyle, width: "25%", display:'inline-block'}}>
        <img/>
        <h3>Playlist name</h3>
        <ul><li>song1</li><li>song2</li><li>song3</li></ul>
      </div>
    );
  }
}
class App extends Component {

  render() {
    return (
      <div className="App-header">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
