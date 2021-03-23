import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showQuestion, addQuestion, deleteQuestion } from '../Redux/Actions/QuestActions'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Question extends Component {
    state = {
        tutid: this.props.match.params.tutid,
    };
    getQuestions = () => {
        const form = {
            tutid: this.state.tutid,
            tutgrp: ''
        }
        this.props.showQuestion(form);
    }
    componentDidMount() {
        this.getQuestions()
    }
    getTutGrp = () => {
        return localStorage.getItem("tutgrp")
    }
    AddQuestion = (question, solution) => {
        const post = {
            question: question,
            tutgrp: this.getTutGrp(),
            tutid: this.state.tutid,
            solution: solution
        }
        this.props.addQuestion(post)
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
    //navigate to previosu page
    // this.props.history.push("/home")
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <br />
                            <h2>List of questions</h2>
                            <hr />
                            <QuestionList removeQuestion={this.removeQuestion} questions={this.props.tutquestion} />
                        </MDBCol>
                        <MDBCol size="12">
                            <h2>Add new question</h2>
                            <hr />
                            <AddQuestion addQuest={this.AddQuestion} onBack={this.OnBack} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }

}

Question.propTypes = {
    showQuestion: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tutquestion: state.quest.questions,
});


export default connect(mapStateToProps, { showQuestion, addQuestion, deleteQuestion })(Question)