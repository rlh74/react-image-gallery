import React, {Component} from 'react';

class GalleryForm extends Component {

  state = {
    image: {
      title: '',
      url: '',
      description: ''
    }
  }

  handleChangeFor = (event, propertyName) => {
      this.setState({
        image: {
          ...this.state.image,
          [propertyName]: event.target.value
        }
      })
    }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit with:', this.state.image);
    this.props.imageInput(this.state.image);
    // clear form inputs
    this.setState({
      image: {
        description: '',
        title: '',
        url: '',
      }
    })
  }

  render(){
    return (
      <>
        <h2>Add an image</h2>
        <form>
          <input placeholder='title' value={this.state.image.title}
                onChange={(event)=>this.handleChangeFor(event, 'title')}/>
          <input placeholder='url' value={this.state.image.url}
                onChange={(event)=>this.handleChangeFor(event, 'url')}/>
          <input placeholder='description' value={this.state.image.description}
                onChange={(event)=>this.handleChangeFor(event, 'description')}/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </>
    )
  }
  
}

export default GalleryForm;