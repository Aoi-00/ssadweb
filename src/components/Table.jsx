import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBInput } from 'mdbreact';

const Table = () => {
  var arr = [
    {
      name: "Iskandar",
      age: 25
    },{
    name: "Brendan",
      age: 25
    }
  ]
  let display = arr.map((eachitem, index) => {
    console.log(eachitem)
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{eachitem.name}</td>
        <td><MDBBtn color="info">Info</MDBBtn></td>
        <td><MDBInput label="Material input" /></td>
      </tr>
    )
  })
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Tutorial Grp</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {display}
      </MDBTableBody>
    </MDBTable>
  );
}

export default Table;