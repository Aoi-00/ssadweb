import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { addQuestion } from '../Redux/Actions/QuestActions'

class AddQuestion extends Component {
    state = {
        question: '',
    }
    UserSubmitQuestion = () => {
        //Fire method from parent component [Question.jsx]
        this.props.addQuest(this.state.question);
    }
    handleChange = (e) => { // to change state everytime you type -- question: value
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="grey-text">
                        <MDBInput label="Enter Question" id='question' icon="question" group type="email" validate error="wrong"
                            success="right" onChange={this.handleChange} />
                    </div>
                    <div className="text-center">
                        <MDBBtn onClick={this.UserSubmitQuestion}>Submit</MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    question: state.quest.questions
});

export default connect(mapStateToProps, { addQuestion })(AddQuestion)
