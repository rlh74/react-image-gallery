import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleyList'
import GalleryForm from '../GalleryForm/GalleryForm'

class App extends Component {
  state = {
    lifeGallery: []
  }

  componentDidMount(){
    console.log('gallery mounted');
    this.getGallery();
  }

  likeItem = (input) => {
    console.log('Updating likes of:', input);
    Axios({
      method: 'PUT',
      url: 'gallery/like/' + input,
      data: input
    })
      .then((response)=>{
          this.getGallery();
      }).catch((error)=>{
        console.log('Error adding like', error)
      }) // end Axios PUT
  } // end likeItem

  addImage = (imageToAdd) => {
    console.log('in addImage');
    Axios({
      method: 'POST',
      url: '/gallery',
      data: imageToAdd
    })
      .then((response)=>{
          this.getGallery();
      }).catch((error)=>{
        console.log('Error adding songs', error)
      })
  }

  getGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then( ( response ) =>{
      console.log( 'back from GET:', response.data );
      this.setState({
        lifeGallery: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'error with GET' );
    }) // end axios call
  } // end getGallery

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Image Gallery</h1>
        </header>
        <br/>
        <GalleryForm imageInput={this.addImage}/>
        <GalleryList items={this.state.lifeGallery} likeItem={this.likeItem}/>
      </div>
    );
  }
}

export default App;
