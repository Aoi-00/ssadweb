import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup } from "mdbreact"
import Uploadfile from '../components/Uploadfile'
import StudentInfo from '../components/StudentInfo'


import { connect } from 'react-redux'
import Proptypes from 'prop-types'

import { getStudentInfo } from '../Redux/Actions/AuthAction'
import { showTutorials } from '../Redux/Actions/TutorialAction'

class StudentProfile extends Component {

    state = {
        tutid: localStorage.getItem("selectedtutid"),
        studid: this.props.match.params.studid,
        description: '',
        email: '',
    }

    componentDidMount() {
        this.getStudentDetails();
        this.props.showTutorials();
        console.log(this.props.allTutorials);
    }

    input = this.props.allTutorials.map((eachTut, index) => {
        return (
            <option value={eachTut.tutid}>{eachTut.tutgrp}</option>
        )
    })

    getStudentDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }

    onChoose = (e) => {
        console.log(e.target.value);
        this.setState(state => ({
            ...state,
            tutid: e.target.value,
        }));
    }

    onSubmitAll = (e) => {
        console.log("changed email:" + this.state.email); //Need an action for this
        console.log("changed tutid:" + this.state.tutid); 
        //this.props.editUser(this.state.email); FIre method from parent component
    }

    handleChange = (e) => { // to change state everytime you type -- question: value
        this.setState(state => ({
            ...state,
            email: e.target.value,
        }))
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <div>
                            <h3>Upload Images</h3>
                            <hr />
                            <StudentInfo student={this.props.student} />
                            <hr />
                            <MDBInput id = 'email' label="E-mail address" outline icon="envelope" onChange= {this.handleChange} >
                            </MDBInput>
                            <Uploadfile />
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol >
                        <MDBInputGroup valueDefault="Choose Tutorial Group" onClick={this.onChoose}
                            containerClassName="mb-3"
                            
                            inputs={
                                < select className="browser-default custom-select" >
                                    {this.input}
                                </select >}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn
                            onClick={this.onSubmitAll}
                            color="mdb-color"
                            outline
                            className="m-0 px-3 py-2 z-depth-0">
                            Confirm
                            </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        )
    }
}
StudentProfile.Proptypes = {

    getStudentInfo: Proptypes.func.isRequired,
    showTutorials: Proptypes.func.isRequired,

}

const mapStateToProps = state => ({
    student: state.auth.studentinfo,
    allTutorials: state.tutorial.tutorialgrp,

})
export default connect(mapStateToProps, { getStudentInfo, showTutorials })(StudentProfile)
