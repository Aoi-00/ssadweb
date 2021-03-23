import React, {Component} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
class StudentSubmit extends Component {
  
  render() {
    return (
      <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Score</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {this.props.mycompletedtask && this.props.mycompletedtask.map(x => {
          return(
        <tr key = {  x.studid }>
          <td>{x.name}</td>
          <td>{x.date}</td>
          <td>{x.score}</td>
          
        </tr>
        
          )
  })}
      </MDBTableBody>
    </MDBTable>
    )
  }
}

export default StudentSubmit;