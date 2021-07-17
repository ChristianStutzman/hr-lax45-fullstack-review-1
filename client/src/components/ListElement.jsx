import React from 'react';

const ListElement = (props) =>
  <span>
    <div>{props.student.name}</div>
    <img src={props.student.imageUrl}></img>
  </span>


export default ListElement;