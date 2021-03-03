import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const TutorialTable = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><MDBBtn size ="sm" color="red" >Remove</MDBBtn></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><MDBBtn size ="sm" color="red" >Remove</MDBBtn></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td><MDBBtn size ="sm" color="red" >Remove</MDBBtn></td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default TutorialTable;