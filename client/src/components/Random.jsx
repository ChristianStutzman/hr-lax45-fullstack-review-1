import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentStudent: {
        name: 'Michael',
        imageUrl: 'https://ca.slack-edge.com/T2SV1LBC6-U01PV3GJLTY-166182619cff-512'
      }
    }
    this.students = props.students;
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.students.length);
    this.setState({
      currentStudent: this.students[ind]
    })
  }

  componentDidMount() {
    this.getRandomStudent();
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.currentStudent.imageUrl}></img>
          <h1>{this.state.currentStudent.name}</h1>
        </div>
        <button onClick={this.getRandomStudent} >Randomize</button>
      </div>
    )
  }
}