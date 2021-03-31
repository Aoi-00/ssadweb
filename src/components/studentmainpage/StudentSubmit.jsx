import React, {Component} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
class StudentSubmit extends Component {
  onSelect = (ldrid) => {
    this.props.selectSubmission(ldrid)
  }
  render() {
    return (
      <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Score</th>
          <th>View</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {this.props.mycompletedtask && this.props.mycompletedtask.map(x => {
          return(
        <tr key = {  x.studid }>
          <td>{x.name}</td>
          <td>{x.date}</td>
          <td>{x.score}</td>
          <td><MDBBtn color="green" onClick={() => this.onSelect(x.id)} size="sm">View</MDBBtn></td>
        </tr>
        
          )
  })}
      </MDBTableBody>
    </MDBTable>
    )
  }
}

export default StudentSubmit;