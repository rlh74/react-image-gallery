import React, { Component } from 'react';

class GalleryList extends Component {
  componentDidMount(){
    console.log( 'GalleryList mounted:' );   
  } // end componentDidMount

  render() {
    return (
      <>
        <p>{ JSON.stringify( this.props.items ) }</p>
      </>
    ); // end return
  } // end render
} // end class

export default GalleryList;