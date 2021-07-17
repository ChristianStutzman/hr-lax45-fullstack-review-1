import React from 'react';
import axios from 'axios';

export default class Update extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgurl: '',
      updatename: ''
    }
    this.getStudents = props.getStudents;
    this.students = props.students;
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let name = this.state.updatename ? this.state.updatename : this.state.name;
    let url, id;
    for (let student of this.students) {
      if (student.name === this.state.name) {
        id = student._id;
        url = this.state.imgurl ? this.state.imgurl : student.imageUrl;
      }
    }
    let studentInfo = {
      name: name,
      imageUrl: url
    };
    axios.put(`http://localhost:3000/api/students/${id}`, {
      studentInfo: studentInfo,
      id: id
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
          <h2>{this.state.updatename || this.state.name}</h2>
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
          <label>Student Name To Update: </label>
          <input type="text" name="name" onChange={this.changeHandler} />
          <label>New Student Name: </label>
          <input type="text" name="updatename" placeholder="Same Value? Leave this blank" onChange={this.changeHandler} />
          <label>New Image URL: </label>
          <input type="text" name="imgurl" placeholder="Same Value? Leave this blank" onChange={this.changeHandler} />
          <button type="button" onClick={this.handleSubmit} >Submit</button>
        </form>
        <h1>Preview:</h1>
        <div>{this.showPreview()}</div>
      </div>
    )
  }
}