import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBBtn } from "mdbreact";
import QuestionList from '../components/questionpage/QuestionList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAllQuestion, addQuestion, deleteQuestion, showTutorialQuestion } from '../Redux/Actions/QuestActions'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';
import TutQuestionList from '../components/questionpage/TutQuestionList';

class Question extends Component {
    /**
     * state 
     * tutid : tutid
     */
    state = {
        tutid: this.props.match.params.tutid,
    };

    /**
     * getTutorialQuestions
     */
    getTutorialQuestions = () => {
        const form = {
            tutid: this.state.tutid,
        }
        this.props.showTutorialQuestion(form);
    }
    /**
     * getQuestionList
     */
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
    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    /**
     * getTutGrp
     * @returns tutgrp
     */
    getTutGrp = () => {
        return localStorage.getItem("tutgrp")
    }
    /**
     * removeQuestion
     * @param {*} questid 
     */
    removeQuestion = (questid) => {
        const form = {
            questid: questid
        }
        this.props.deleteQuestion(form)
    }
    /**
     * OnBack
     * navigate to assignment
     */
    OnBack = () => {
        this.props.history.push('/assignment')
    }
    /**
     * addToTutorial
     * @param {*} questid 
     */
    addToTutorial = (questid) => {
        let currentQuestion = this.props.allquestion.filter(x => x.questid === questid)
        const post = {
            question: currentQuestion[0].question,
            tutgrp: this.getTutGrp(),
            tutid: this.state.tutid,
            solution: currentQuestion[0].solution,
            level: currentQuestion[0].level,
            section: currentQuestion[0].section,
            hint: currentQuestion[0].hint
        }
        this.props.addQuestion(post)
    }
    /**
     * Question page
     * @returns Question page
     */
    render() {
        let filteredAllQuestion = this.props.allquestion.filter(x => !this.props.tutquestion.find(z => z.question === x.question))
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
                            <h2>Add Pre-defined Questions</h2>
                            <hr />
                            {/* <AddQuestion addQuest={this.AddQuestion} onBack={this.OnBack} /> */}
                            <QuestionList addQuestion={this.addToTutorial} questions={filteredAllQuestion} />
                        </MDBCol>
                        <MDBCol size="12">
                            <h2>Add New Question</h2>
                            <hr />
                            <div id="html_embed_widget_11018" className="html_embed_widget embed_wrapper">
                                <div data-height="3000" data-width="3000" className="game_frame game_loaded" className="embed-responsive embed-responsive-16by9">
                                    <iframe height="100%" width="100%" mozallowfullscreen="true" allow="autoplay; fullscreen; geolocation; microphone; camera; midi" src="https://aseweb.hyunatic.com/" msallowfullscreen="true" scrolling="no" allowFullScreen={true} webkitallowfullscreen="true" id="game_drop" allowtransparency="true" frameBorder="0">
                                    </iframe>
                                </div>
                            </div>
                            <MDBBtn color="red" onClick={this.OnBack}> Back
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
                <br />
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