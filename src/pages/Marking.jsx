import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentSubmission } from '../Redux/Actions/GameActions'
import { showQuestion } from '../Redux/Actions/QuestActions'
import { getStudentInfo } from '../Redux/Actions/AuthAction'
import StudentInfo from '../components/StudentInfo';
import MarkDropDown from '../components/MarkDropDown';
import MarkScoreComment from '../components/MarkScoreComment';
import MarkPicture from '../components/MarkPicture'


class Marking extends Component {
    state = {
        submissionid: this.props.match.params.id,
        tutid: localStorage.getItem("selectedtutid"),
        studid: this.props.match.params.studid
    }
    componentWillMount() {
        this.getSubmission();
        this.getTutorialQuestions();
        this.getStudentDetails();
    }
    getSubmission() {
        const form = {
            id: this.state.submissionid,
        }
        this.props.getStudentSubmission(form)
    }
    getTutorialQuestions() {
        const form = {
            tutid: this.state.tutid
        }
        this.props.showQuestion(form)
    }
    getStudentDetails(){
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }
    render() {
        return (
            <MDBContainer>
                <br />
                <MDBRow>
                    <MDBCol size="6">
                        <h2>Student Details</h2>
                        <hr />
                        <StudentInfo student={this.props.student} />
                    </MDBCol>
                    <MDBCol size="6">
                        <h2>Students Answer</h2>
                        <hr />
                        <MarkPicture record={this.props.record} />
                    </MDBCol>
                    <MDBCol size="6">
                        <br></br>
                        <h2>Question List</h2>
                        <MarkDropDown questions={this.props.questionlist} />
                    </MDBCol>
                    <MDBCol size="6">
                        <br />
                        <h2>Marking</h2>
                        <MarkScoreComment record={this.props.record} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

Marking.Proptypes = {
    getStudentSubmission: Proptypes.func.isRequired,
    showQuestion: Proptypes.func.isRequired,
    getStudentInfo: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    record: state.game.submission,
    questionlist: state.quest.questions,
    student: state.auth.studentinfo
})
export default connect(mapStateToProps, { getStudentSubmission, showQuestion, getStudentInfo })(Marking)