import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = "#fff";
let defaultStyle={
  color: textColor
}
let fakeServerData = {
  user: {
    name: 'Cheyenne',
    playlists:[
      {
        name: 'My favorites',
        songs: [{name:'Beat it', duration: 134},
        {name:'7 rings',duration: 185},
        {name: 'Bad Idea', duration: 167}]
      },
      {
        name: 'Top Hits',
        songs: [{name:'Imagine', duration: 189},
        {name:  'Chlorine', duration: 205}, 
        {name:'Let Me Down Slowly', duration: 152}]
      },
      {
        name: 'Hot',
        songs: [{name: 'Mantra',duration: 201},
        {name: 'No One Knows', duration: 212},
        {name: 'Losing My Religon', duration: 164}]
      },
      {
        name: 'Discover Weekly',
        songs: [{name:'Head Above Water',duration: 198 },
                {name: 'Shallow', duration: 187},
                {name: 'Here Comes The Sun',duration: 203}]
      }
    ]
  }
};
class PlaylistCounter extends Component {
  render(){
    return (
      <div style={{...defaultStyle, width:"40%", display: 'inline-block'}}>
        <h2>{this.props.Playlists.length} Playlists</h2>
      </div>
    );
  }
}
class HoursCounter extends Component {
  render(){
    let allSongs = this.props.Playlists.reduce((songs, eachPlayList)=> {
      return songs.concat(eachPlayList.songs)
    },[])
  let totalDuration = allSongs.reduce((sum, eachSong)=>{
    return sum + eachSong.duration
  },0);
    return (
      <div style={{...defaultStyle, width:"40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
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
    let playlist = this.props.playlist
    return(
      <div style ={{...defaultStyle, width: "25%", display:'inline-block'}}>
        <img/>
        <h3>{playlist.name}</h3>
        <ul>
        {playlist.songs.map(song =>  
        <li>{song.name}</li>
        )}
        </ul>
      </div>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    //let playlistElements = []
    //if (this.state.serverData.user){
    //for (let i = 0; i < this.state.serverData.user.playlists.length; i++){
      //let playlist = this.state.serverData.user.playlists[i]
      //playlistElements.push(<Playlist playlist= {playlist}/>)
    //}
  //}
    return (
      <div className="App-header">
        {this.state.serverData.user ?
        <div>
        <h1 style={{...defaultStyle, 'fontSize':'54px'}}>
          {this.state.serverData.user.name}'s Playlists
        </h1>
          <PlaylistCounter Playlists={ 
            this.state.serverData.user.playlists}/>
          <HoursCounter Playlists={ 
            this.state.serverData.user.playlists}/>
        
        <Filter />
        {this.state.serverData.user.playlists.map(playlist => 
        <Playlist playlist= {playlist}/>
        )}

      </div> : <h1>Loading...</h1>
  }
  </div>
    );
  }
}

export default App;
