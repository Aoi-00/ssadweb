import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBLink } from 'mdbreact';

const TutorialTable = ({ tutorial, navigate, deleteTut }) => {
  let onDelete = (tutid) => {
    deleteTut(tutid)
  }
  let ViewTutorial = (tutid) => {
    navigate(tutid)
  }
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
        <th>id</th>
          <th>Tutorial Name</th>
          <th>Tutorial Group</th>
          <th>Created by</th>
          <th>Remove</th>
          <th>View</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {tutorial && tutorial.map(x => {
          return (
            <tr key={x.tutid}>
              <td>{x.tutid}</td>
              <td>{x.tutname}</td>
              <td>{x.tutgrp}</td>
              <td>{x.createdby}</td>
              <td><MDBBtn size="sm" color="red" onClick={() => onDelete(x.tutid)}>Remove</MDBBtn></td>
              <td><MDBBtn size="sm" color="blue" onClick={() => ViewTutorial(x.tutid)}> View </MDBBtn></td>
            </tr>
          )
        })}
      </MDBTableBody>
    </MDBTable>
  );

}


export default TutorialTable;