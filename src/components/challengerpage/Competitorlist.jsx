import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

class Competitorlist extends Component {
    viewCompetition = (compid, studid, tutid, myldrid) => {
        localStorage.setItem("compstudid", studid);
        localStorage.setItem("compid", compid);
        localStorage.setItem("comptutid", tutid)
        localStorage.setItem("myldrid", myldrid)
        this.props.navigate()
    }
    render() {
        let competitor = this.props.myCompetitors.map(x => {
            return (
                <tr key={x.competitionid}>
                    <td>{x.name}</td>
                    <td>{x.tutname}</td>
                    <td>{x.score}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.viewCompetition(x.competitionid, x.id, x.tutid, x.leaderboardid)}>View More</MDBBtn></td>
                </tr>
            )
        })
        return (
            <div>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th>Competitor Name</th>
                            <th>Tutorial Name</th>
                            <th>My Score</th>
                            <th>View</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {competitor}
                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}
export default Competitorlist