import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

class StudentAssignment extends Component {
    SendNotification = (leaderboardid,tutid) =>{
        this.props.notification(leaderboardid,tutid)
    }
    render() {
        let myCompletedtut = this.props.myTut.map(x => {
            return (
                <tr key={x.id}>
                    <td>{x.tutname}</td>
                    <td>{x.score}</td>
                    <td>{x.date}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.SendNotification(x.id,x.tutid)}> Compete </MDBBtn></td>
                </tr>
            )
        })
        return (
            <div>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th>Assignment Name</th>
                            <th>Score</th>
                            <th>Submitted on</th>
                            <th>Compete</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {myCompletedtut}
                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}
export default StudentAssignment