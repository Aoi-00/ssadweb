import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';

import { connect } from 'react-redux'
import { addTutorial } from '../Redux/Actions/TutorialAction'

class AddTutorial extends Component {
    state = {
        tutGroup: '',
        tutName: '',
    }
    onSubmit = () => {
        //Method
        //console.log(this.state)
        const post = {
            tutGroup: this.state.tutGroup,
            tutName: this.state.tutName,
        }
        //Send Data to DB
        this.props.addTutorial(post);

    }
    componentWillReceiveProps(nextProps){ //to receive status whether received
        console.log(nextProps.status)
    }

    handleChange = (e) => { //to handle change in inputs
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="grey-text">
                        <MDBInput label="Enter Tutorial Group" id='tutGroup' onChange={this.handleChange} icon="user-plus" group type="email" validate error="wrong"
                            success="right" />
                         <MDBInput label="Enter Description" id= 'tutName' onChange={this.handleChange} icon="user-alt" group type="email" validate error="wrong"
                            success="right" />   
                    </div>
                    <div className="text-center">
                        <MDBBtn onClick= {this.onSubmit}>Submit</MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    status: state.auth.status //state.tut.status?
});

export default connect(mapStateToProps , { addTutorial })(AddTutorial) //to be changed