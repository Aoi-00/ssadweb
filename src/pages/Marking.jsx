import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentSubmission, updateScores } from '../Redux/Actions/GameActions'
import { showQuestion } from '../Redux/Actions/QuestActions'
import { getStudentInfo } from '../Redux/Actions/AuthAction'
import StudentInfo from '../components/marking/StudentInfo';
import MarkDropDown from '../components/marking/MarkDropDown';
import MarkScoreComment from '../components/marking/MarkScoreComment';
import MarkPicture from '../components/marking/MarkPicture'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';


class Marking extends Component {
    state = {
        submissionid: this.props.match.params.id,
        tutid: localStorage.getItem("selectedtutid"),
        studid: this.props.match.params.studid,
        score: '',
        comment: ''
    }
    componentDidMount() {
        this.getStudentDetails();
        this.getSubmission();
        this.getTutorialQuestions();
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
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
    getStudentDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    MarkingComplete = () => {
        const form = {
            id: this.state.submissionid,
            score: this.state.score,
            comment: this.state.comment
        }
        this.props.updateScores(form)
        this.props.history.push("/seltut")
    }

    GoBack = () => {
        this.props.history.push("/seltut")
    }
    render() {
        return (
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />

                    <MDBAnimation type="slideInDown">
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
                        </MDBRow>
                    </MDBAnimation>

                    <MDBAnimation type="slideInUp">
                        <MDBRow>

                            <MDBCol size="6">
                                <br></br>
                                <h2>Answer Key</h2>
                                <MarkDropDown questions={this.props.questionlist} />
                            </MDBCol>
                            <MDBCol size="6">
                                <br />
                                <h2>Marking</h2>
                                <MarkScoreComment markComplete={this.MarkingComplete} goBack={this.GoBack} inputChange={this.handleChange} record={this.props.record} />
                            </MDBCol>
                        </MDBRow>
                    </MDBAnimation>

                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }
}

Marking.Proptypes = {
    getStudentSubmission: Proptypes.func.isRequired,
    showQuestion: Proptypes.func.isRequired,
    getStudentInfo: Proptypes.func.isRequired,
    updateScores: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    record: state.game.submission,
    questionlist: state.quest.questions,
    student: state.auth.studentinfo,
    scores: state.game.status
})
export default connect(mapStateToProps, { getStudentSubmission, showQuestion, getStudentInfo, updateScores })(Marking)