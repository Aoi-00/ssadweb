import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

class Challengerlist extends Component {
    viewChallenge = (compid, studid, tutid, oppldrid) => {
        localStorage.setItem("mystudid", studid);
        localStorage.setItem("compid", compid);
        localStorage.setItem("comptutid", tutid)
        localStorage.setItem("oppldrid", oppldrid)
        this.props.navigate()
    }
    render() {
        console.log(this.props.myChallenger)
        let challenge = this.props.myChallenger.map(x => {
            return (
                <tr key={x.competitionid}>
                    <td>{x.name}</td>
                    <td>{x.tutname}</td>
                    <td>{x.score}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.viewChallenge(x.competitionid,x.competitorid,x.tutid, x.leaderboardid)}>View More</MDBBtn></td>
                </tr>
            )
        })
        return (
            <div>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th>Challenger Name</th>
                            <th>Tutorial Name</th>
                            <th>Challengers Score</th>
                            <th>View</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {challenge}
                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}
export default Challengerlist