import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  state = {
    displayImage: true
  };

  componentDidMount(){
    console.log( 'GalleryItem mounted' );   
  } // end componentDidMount

  toggleDetails=()=>{
    console.log('in click', this.props.imageItem.title)
    this.setState({
      displayImage: !this.state.displayImage
    })
  }

  render() {
    return (
      <div className="galleryItem" onClick={this.toggleDetails}>
        {(this.state.displayImage ? <img src={this.props.imageItem.path} alt={this.props.imageItem.title}/> : <p>{this.props.imageItem.description}</p>)}
      </div>
    ); // end return
  } // end render
} // end class

export default GalleryItem;