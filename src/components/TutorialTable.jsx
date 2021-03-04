import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBLink } from 'mdbreact';

const TutorialTable = ({ tutorial }) => {
  let onDelete = (e) => {
    console.log(e)
  }
  let display = tutorial.map((eachTut, index) => {
    console.log(eachTut)
    return (
      <tr id={"table" + index}>
        <td>{eachTut.tutname}</td>
        <td>{eachTut.tutgrp}</td>
        <td>{eachTut.createdby}</td>
        <td><MDBBtn size="sm" color="red" onClick={onDelete}>Remove</MDBBtn></td>
        <td><MDBLink to={"/question/" + eachTut.tutid}><MDBBtn size="sm" color="blue" onClick={onDelete}>View</MDBBtn></MDBLink></td>
      </tr>
    )
  })
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Tutorial Name</th>
          <th>Tutorial Group</th>
          <th>Created by</th>
          <th>Remove</th>
          <th>View</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {display}
      </MDBTableBody>
    </MDBTable>
  );

}


export default TutorialTable;