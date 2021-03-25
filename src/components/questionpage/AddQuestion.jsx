import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { addQuestion } from '../../Redux/Actions/QuestActions'

class AddQuestion extends Component {
    state = {
        question: '',
        solution: '',
        loading: false
    }
    UserSubmitQuestion = () => {
        //Fire method from parent component [Question.jsx]
        console.log(this.state)
        this.setState({
            loading: !this.state.loading,
            question: "",
            solution: ""
        })
        this.props.addQuest(this.state.question, this.state.solution);
    }
    handleChange = (e) => { // to change state everytime you type -- question: value
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.question !== this.props.question){
            this.setState({loading : false
            })
        }
    }

    render() {
        const {loading } = this.state;
        return (
            <div>
                <form>
                    <div className="grey-text">
                        <MDBInput label="Enter Question" id='question' icon="question" group type="email" validate error="wrong"
                            success="right" onChange={this.handleChange} />
                    </div>
                    <div className="grey-text">
                        <MDBInput label="Enter Solution" id='solution' icon="check" group type="email" validate error="wrong"
                            success="right" onChange={this.handleChange} />
                    </div>
                    <div className="text-center">
                        <MDBBtn color="blue" onClick={this.UserSubmitQuestion} disabled={loading}>
                        {loading && <span>Submitting</span>}
                            {!loading && <span>Submit</span>}</MDBBtn>
                            
                        <MDBBtn color="green" onClick = {this.props.onBack} > Back
                       </MDBBtn>
                    
                    </div >
                    
                    <br/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    question: state.quest.questions
});

export default connect(mapStateToProps, { addQuestion })(AddQuestion)
