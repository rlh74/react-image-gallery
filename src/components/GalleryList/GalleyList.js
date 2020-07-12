import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
  componentDidMount(){
    console.log( 'GalleryList mounted:' );   
  } // end componentDidMount

  render() {
    return (
      <>
          { this.props.items.map( ( item, index )=><GalleryItem imageItem={ item } key={ index } likeItem={this.props.likeItem}/>)}
      </>
    ); // end return
  } // end render
} // end class

export default GalleryList;