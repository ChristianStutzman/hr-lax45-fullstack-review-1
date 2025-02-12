import React from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import List from './List.jsx';
import Random from './Random.jsx';
import Update from './Update.jsx';
const server = 'http://localhost:3000';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentlist : []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changepage = this.changepage.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents()
  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get(`${server}/api/students`)
      .then(data => {
        console.log('student list:', data);
        this.setState({
          studentlist: data.data
        })
      })
      .catch(err => {throw err})
  }

  changepage(e){
    this.setState({
      page: e.target.value
    })
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add getStudents={this.getStudents} />
          <button value='home' onClick={this.changepage} >Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List students={this.state.studentlist} />
          <button value='home' onClick={this.changepage} >Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random students={this.state.studentlist} />
          <button value='home' onClick={this.changepage} >Back</button>
        </div>
      )
    } else if (this.state.page === 'update') {
      return (
        <div>
          <Update getStudents={this.getStudents} students={this.state.studentlist} />
          <button value='home' onClick={this.changepage} >Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changepage}>Add Student</button>
          <button value='list' onClick={this.changepage}>List Students</button>
          <button value='random' onClick={this.changepage}>Random Student</button>
          <button value='update' onClick={this.changepage}>Update Student</button>
        </div>
      )
    }
  }
}