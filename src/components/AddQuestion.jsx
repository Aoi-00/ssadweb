import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { testCall } from '../Redux/Actions/AuthAction'

class AddQuestion extends Component {
    state = {
        question: '',
    }
    UserSubmitQuestion = () => {
        //Method
        const post = {
            question: this.state.question,
        }
        //Send Data to DB
        this.props.testCall(post);
        //console.log(this.state.question)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.status)
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
                        <MDBInput label="Enter Question" id = 'question' icon="question" group type="email" validate error="wrong"
                            success="right" onChange= {this.handleChange} />
                    </div>
                    <div className="text-center">
                        <MDBBtn onClick= {this.UserSubmitQuestion}>Submit</MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    status: state.auth.status
});

export default connect(mapStateToProps , { testCall })(AddQuestion)
