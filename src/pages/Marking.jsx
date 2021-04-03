import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn } from "mdbreact";
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentSubmission, updateScores } from '../Redux/Actions/GameActions'
import { showTutorialQuestion } from '../Redux/Actions/QuestActions'
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
        comment: '',
        scoreError:"",
        commentError:""
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
        this.props.showTutorialQuestion(form)
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
    validate = () => {
        let scoreError= "";
        let commentError = "";

        if (!this.state.score){
            scoreError= "Score cannot be empty";
        }
        else{
            if (!Number(this.state.score)){
                scoreError = "Score must be a numerical value";
            }
        }
        if (!this.state.comment){
            commentError= "Comment cannot be empty";
        }
        if (commentError || scoreError){
            this.setState({commentError,scoreError});
            return false
        }
        return true;
    }
    MarkingComplete = () => {
        const form = {
            id: this.state.submissionid,
            score: this.state.score,
            comment: this.state.comment
        }
        const isValid = this.validate();
        console.log(isValid, this.state.commentError,this.state.scoreError);
        if (isValid){
            this.setState({scoreError: "",commentError: ""})
            this.props.updateScores(form)
            this.props.history.push("/seltut")
        }        
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
                                <h2>Student's Answer</h2>
                                <hr />
                                <MarkPicture record={this.props.record} />
                            </MDBCol>
                        </MDBRow>
                    </MDBAnimation>

                    <MDBAnimation type="slideInUp">
                        <MDBRow>
                            <MDBCol size="12">
                                <br />
                                <h2>Marking</h2>
                                <hr/>
                                <MarkScoreComment scoreError = {this.state.scoreError} commentError = {this.state.commentError} markComplete={this.MarkingComplete} goBack={this.GoBack} inputChange={this.handleChange} record={this.props.record} />
                                <MDBBtn>Submit</MDBBtn>
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
    showTutorialQuestion: Proptypes.func.isRequired,
    getStudentInfo: Proptypes.func.isRequired,
    updateScores: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    record: state.game.submission,
    questionlist: state.quest.questions,
    student: state.auth.studentinfo,
    scores: state.game.status
})
export default connect(mapStateToProps, { getStudentSubmission, showTutorialQuestion, getStudentInfo, updateScores })(Marking)