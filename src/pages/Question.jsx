import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion';


import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showQuestion } from '../Redux/Actions/QuestActions'

class Question extends Component {
    state = {
        tutid: this.props.match.params.id,
    };
    getQuestions = () =>{
        const form = {
            tutid: this.state.tutid
        }
        this.props.showQuestion(form);
    }
    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                    <br/>
                    <h2>List of questions</h2>
                    <hr/>
                        <QuestionList question ={this.props.tutquestion} />
                    </MDBCol>
                    <MDBCol size="12">
                    <h2>Add new question</h2>
                    <hr/>
                        <AddQuestion />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}

Question.propTypes = {
    showQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tutquestion: state.quest.questions,
});


export default connect(mapStateToProps, {showQuestion})(Question)