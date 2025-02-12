import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgurl: ''
    }
    this.getStudents = props.getStudents;
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPreview = this.showPreview.bind(this);
  }

  changeHandler(e){
    // Todo: Add your code here to handle the data the client inputs
    e.preventDefault();
    let stateObj = {};
    stateObj[e.target.getAttribute('name')] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit(e){
    // Todo: Add your code here to handle the API requests to add a student
    e.preventDefault();
    axios.post('http://localhost:3000/api/students', {
      name: this.state.name,
      imageUrl: this.state.imgurl
    })
      .then(res => {
        this.getStudents();
        console.log(res);
      })
      .catch(err => {
        throw err;
      })

  }

  showPreview(){
    return (
      (this.state.name && this.state.imgurl) ? (
        <div>
          <img src={this.state.imgurl}></img>
          <h2>{this.state.name}</h2>
        </div>
      ) : (
        <div>
          Fill out the form and a preview will appear here...
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler} />
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={this.changeHandler} />
          <button type="button" onClick={this.handleSubmit} >Submit</button>
        </form>
        <h1>Preview:</h1>
        <div>{this.showPreview()}</div>
      </div>
    )
  }
}