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

  handleLike = () => {
    // sends object id back to Parent function
    this.props.likeItem(this.props.imageItem.id);
  }


  render() {
    return (
      <div className="container">
        <div className="gallery-item" onClick={this.toggleDetails}>
          {(this.state.displayImage ? <img src={this.props.imageItem.path} alt={this.props.imageItem.title}/> : <p>{this.props.imageItem.description}</p>)}
        </div>
        <div className="like-btn">
          <div>Likes: {this.props.imageItem.likes}</div>
          <button onClick={this.handleLike}>Like</button>
        </div>
      </div>
    ); // end return
  } // end render
} // end class

export default GalleryItem;