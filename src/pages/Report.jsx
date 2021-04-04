import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBIcon, MDBBtn } from 'mdbreact'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import BarGraph from '../components/reportpage/BarGraph'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchLeaderboard } from '../Redux/Actions/GameActions'
import StatisticalAnalysis from '../components/reportpage/StatisticalAnalysis'
import LineGraph from '../components/reportpage/LineGraph'
import StudentCard from '../components/reportpage/StudentCard'
import { getStudentInfo } from '../Redux/Actions/AuthAction'

class Report extends Component {
    /**
     * state
     * set tutgrp to local storage tutgrp
     * set tutid to local storage selectedTutId
     * set tutname to local storage selectedTutName
     * set student to []
     */
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        tutid: localStorage.getItem("selectedTutId"),
        tutname: localStorage.getItem("selectedTutName"),
        student: []
    }
    componentDidMount() {
        this.props.fetchLeaderboard();
    }
    /**
     * StudentAnalysis
     * @param {*} studid 
     */
    StudentAnalysis = (studid) => {
        this.setState({ student: [] })
        let selectedStudent = this.props.leaderboard.filter(x => x.tutid === this.state.tutid && x.studid === studid && x.tutgrp === this.state.tutgrp)
        this.getStudentDetails(studid)
        this.setState({ student: selectedStudent })
    }
    /**
     * GetStudentDetails
     * @param {*} studid 
     */
    getStudentDetails(studid) {
        const form = {
            id: studid
        }
        this.props.getStudentInfo(form)
    }
    /**
     * PrintPage
     */
    printPage = () => {
        window.print()
    }

    /**
     * goBack
     * navigate to reporthome
     */
    goBack = () => this.props.history.push('/reporthome')

    /**
     * Report page
     * @returns Report page
     */
    render() {
        let { leaderboard } = this.props
        let CurrentAssginmentScores = leaderboard.filter(x => x.tutgrp === this.state.tutgrp && x.tutid === this.state.tutid).map(z => ({ name: z.name, score: z.score, studid: z.studid }))
        let HighestScoreForEachStudent = CurrentAssginmentScores.reduce((state, current) => {
            let prevIndex = state.findIndex(x => x.name === current.name);
            if (prevIndex === -1)
                state.push(current)
            else if (state[prevIndex].score < current.score)
                state[prevIndex] = current
            return state
        }, [])
        return (
            <div>
                <Navbar />
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <h3>Student Scores for: {this.state.tutname} </h3>
                            <hr />
                            {leaderboard && <BarGraph GraphData={HighestScoreForEachStudent} AssignmentScoreList={CurrentAssginmentScores} viewStudent={this.StudentAnalysis} />}
                        </MDBCol>
                        <br />
                        <MDBCol size="12">
                            <h3>Statistical Analysis</h3>
                            <hr />
                            {CurrentAssginmentScores && <StatisticalAnalysis scores={CurrentAssginmentScores} />}
                        </MDBCol>
                        {(this.state.student.length !== 0 && this.props.selectedStudent) &&
                            <React.Fragment>
                                <MDBCol size="4">
                                    <h3>Student Profile</h3>
                                    <hr />
                                    <StudentCard key={this.props.selectedStudent.id} profile={this.props.selectedStudent} />
                                </MDBCol>

                                <MDBCol size="8">
                                    <h3>Student Performance</h3>
                                    <hr />
                                    <LineGraph LineGraphData={this.state.student} />
                                    <MDBBtn onClick={this.printPage} color="blue">Print <MDBIcon icon="print" className="mr-1" /></MDBBtn>
                                </MDBCol>
                            </React.Fragment>
                        }
                    </MDBRow>
                    <MDBBtn onClick={this.goBack} color="red">Back</MDBBtn>
                </MDBContainer>
                <br /><br />
                <Footer />
            </div>
        )
    }
}
Report.propTypes = {
    fetchLeaderboard: PropTypes.func.isRequired,
    getStudentInfo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    leaderboard: state.game.records,
    selectedStudent: state.auth.studentinfo,
});

export default connect(mapStateToProps, { fetchLeaderboard, getStudentInfo })(Report)