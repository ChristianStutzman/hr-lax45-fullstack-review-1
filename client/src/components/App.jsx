import React from 'react';
import axios from 'axios';
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
    // Todo: Add your logic to "change pages" here on button click

  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home'>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List />
          <button value='home'>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random />
          <button value='home'>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add'>Add Student</button>
          <button value='list'>List Students</button>
          <button value='random'>Random Student</button>
        </div>
      )
    }
  }
}