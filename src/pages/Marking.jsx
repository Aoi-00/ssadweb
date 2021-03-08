import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MarkingTable from '../components/MarkingTable'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { fetchLeaderboard } from '../Redux/Actions/GameActions'
import IndividualMark from '../components/IndividualMark'
import StudentInfo from '../components/StudentInfo';
import MarkDropDown from '../components/MarkDropDown';
import MarkScoreComment from '../components/MarkScoreComment';
import MarkPicture from '../components/MarkPicture'


class Marking extends Component {
    componentWillMount() {
        this.props.fetchLeaderboard();
    }
    //<MarkingTable markingtable = {this.props.leaderboard}/>
    render() {

        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol size="6">
                        <h2>  Student Details</h2>
                        <StudentInfo />
                    </MDBCol>
                    <MDBCol size="6">
                        <h2>  Assignment Questions</h2>
                        <MarkPicture />
                    </MDBCol>


                    <MDBCol size="6">
                        <br></br>
                        <h2>  Tutorial Grouping</h2>
                        <MarkDropDown />
                    </MDBCol>
                    <MDBCol size="6">
                        <br />
                        <h2>  Marking</h2>
                        <MarkScoreComment />
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        )
    }
}

Marking.Proptypes = {
    fetchLeaderboard: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    leaderboard: state.game.records
})
export default connect(mapStateToProps, { fetchLeaderboard })(Marking)