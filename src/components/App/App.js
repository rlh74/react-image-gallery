import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleyList'

class App extends Component {
  state = {
    lifeGallery: []
  }

  componentDidMount(){
    console.log('gallery mounted');
    this.getGallery();
  }

  getGallery(){
    // get items from server via AXIOS
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then( ( response ) =>{
      console.log( 'back from GET:', response.data );
      // hold this data in state.items
      this.setState({
        lifeGallery: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    }) // end axios call
  } // end getGallery

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" alt="pic"/>
        <GalleryList items={this.state.lifeGallery}/>
      </div>
    );
  }
}

export default App;
