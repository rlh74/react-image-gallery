import React, {Component} from 'react';

class GalleryForm extends Component {

  state = {
    song: {
      track: '',
      rank: '',
      artist: '',
      published: ''
    }
  }

  handleChangeFor = (event, propertyName) => {
      this.setState({
        song: {
          ...this.state.song,
          [propertyName]: event.target.value
        }
      })
    }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSong(this.state.song);
    // clear form inputs
    this.setState({
      song: {
        track: '',
        rank: '',
        artist: '',
        published: ''
      }
    })
  }

  render(){
    return (
      <>
        <h2>Add a song</h2>
        <form>
          <input placeholder='title' value={this.state.song.rank}
                onChange={(event)=>this.handleChangeFor(event, 'rank')}/>
          <input placeholder='url' value={this.state.song.artist}
                onChange={(event)=>this.handleChangeFor(event, 'artist')}/>
          <input placeholder='description' value={this.state.song.track}
                onChange={(event)=>this.handleChangeFor(event, 'track')}/>
          <input placeholder='Published' value={this.state.song.published}
                onChange={(event)=>this.handleChangeFor(event, 'published')}
                type="date"/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </>
    )
  }
  
}

export default GalleryForm;