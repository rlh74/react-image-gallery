import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
  componentDidMount(){
    console.log( 'GalleryList mounted:' );   
  } // end componentDidMount

  render() {
    return (
      <div className="gallery">
          { this.props.items.map( ( item, index )=><GalleryItem imageItem={ item } key={ index }/>)}
      </div>
    ); // end return
  } // end render
} // end class

export default GalleryList;