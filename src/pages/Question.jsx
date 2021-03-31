import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import QuestionList from '../components/questionpage/QuestionList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAllQuestion, addQuestion, deleteQuestion, showTutorialQuestion } from '../Redux/Actions/QuestActions'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';
import TutQuestionList from '../components/questionpage/TutQuestionList';

class Question extends Component {
    state = {
        tutid: this.props.match.params.tutid,
    };
    getTutorialQuestions = () => {
        const form = {
            tutid: this.state.tutid,
        }
        this.props.showTutorialQuestion(form);
    }
    getQuestionList = () => {
        const form = {
            tutid: '0',
        }
        this.props.showAllQuestion(form);
    }
    componentDidMount() {
        this.getTutorialQuestions();
        this.getQuestionList();
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    getTutGrp = () => {
        return localStorage.getItem("tutgrp")
    }
    removeQuestion = (questid) => {
        const form = {
            questid: questid
        }
        this.props.deleteQuestion(form)
    }
    OnBack = () => {
        this.props.history.push('/assignment')
    }
    addToTutorial = (questid) => {
        let currentQuestion = this.props.allquestion.filter(x => x.questid === questid)
        const post = {
            question: currentQuestion[0].question,
            tutgrp: this.getTutGrp(),
            tutid: this.state.tutid,
            solution: currentQuestion[0].solution
        }
        this.props.addQuestion(post)
    }
    render() {
        return (
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <br />
                            <h2>Current Tutorial Questions</h2>
                            <hr />
                            <TutQuestionList removeQuestion={this.removeQuestion} questions={this.props.tutquestion} />
                        </MDBCol>
                        <MDBCol size="12">
                            <h2>Questions Pool</h2>
                            <hr />
                            {/* <AddQuestion addQuest={this.AddQuestion} onBack={this.OnBack} /> */}
                            <QuestionList addQuestion={this.addToTutorial} questions={this.props.allquestion} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }

}

Question.propTypes = {
    showAllQuestion: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
    showTutorialQuestion: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tutquestion: state.quest.tutquestions,
    allquestion: state.quest.questions
});


export default connect(mapStateToProps, { showTutorialQuestion, showAllQuestion, addQuestion, deleteQuestion })(Question)