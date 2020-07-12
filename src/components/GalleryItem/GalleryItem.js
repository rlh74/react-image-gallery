import React, { Component } from 'react';

class GalleryItem extends Component {
  componentDidMount(){
    console.log( 'GalleryItem mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <li>
          <p>{ JSON.stringify( this.props.imageItem ) }</p>
        </li>
      </div>
    ); // end return
  } // end render
} // end class

export default GalleryItem;