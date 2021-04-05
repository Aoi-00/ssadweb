import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

class Challengerlist extends Component {
    /**
     * viewChallenge
     * @param {*} compid set compid to local storage compid
     * @param {*} studid set studid to local storage mystudid
     * @param {*} tutid set tutid to local storage comptutid
     * @param {*} oppldrid set oppldrid to local storage oppldrid
     * @param {*} challengerid set channgerid to local storage challengerid
     */
    viewChallenge = (compid, studid, tutid, oppldrid, challengerid) => {
        localStorage.setItem("mystudid", studid);
        localStorage.setItem("compid", compid);
        localStorage.setItem("comptutid", tutid)
        localStorage.setItem("oppldrid", oppldrid)
        localStorage.setItem("challengerid", challengerid)
        this.props.navigate()
    }

    /**
     * ChallengerList
     * @returns challengerlist details
     */
    render() {
        let challenge = this.props.myChallenger.map(x => {
            return (
                <tr key={x.competitionid}>
                    <td>{x.name}</td>
                    <td>{x.tutname}</td>
                    <td>{x.score}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.viewChallenge(x.competitionid, x.competitorid, x.tutid, x.leaderboardid, x.id)}>View More</MDBBtn></td>
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