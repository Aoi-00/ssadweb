import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const TutorialTable = ({ tutorialtable }) => {
  let onDelete = (e) => {
    console.log(e) //TODO: how to delete a row?
  }
  console.log(tutorialtable)
  if (tutorialtable) {
    tutorialtable.map(data => TutorialTable.data.push({ tutGroup: data.tutgrp, Creator: data.createdby }))
  }
  else {
    var data = useState([
      {
        tutGroup: "TS1",
        Creator: "Anna"
      },
      {
        tutGroup: "TS2",
        Creator: "Ben"
      },
      {
        tutGroup: "TS3",
        Creator: "Jim"
      },
    ])
  }
  useEffect(() => {
    console.log(tutorialtable)
  })


  let display = data.map((eachTut, index) => {
    //console.log(eachTut);
    return (
      <tr id={"table" + index}>
        <td>{index + 1}</td>
        <td>{eachTut.tutGroup}</td>
        <td>{eachTut.Creator}</td>
        <td><MDBBtn size="sm" color="red" onClick={onDelete}>Remove</MDBBtn></td>
      </tr>
    )
  })

  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th>Serial No </th>
          <th>Tutorial </th>
          <th>Created by</th>
          <th>Remove</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {display}
      </MDBTableBody>
    </MDBTable>
  );

}


export default TutorialTable;