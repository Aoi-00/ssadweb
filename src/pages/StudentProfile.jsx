import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInputGroup } from "mdbreact"
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
    }

    componentDidMount() {
        this.getStudentDetails();
        this.props.showTutorials();
        console.log(this.props.allTutorials);
    }

    input = this.props.allTutorials.map((eachTut,index) => {
        return (
                <option value={index}>{eachTut.tutgrp}</option>
        )
    })

    getStudentDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }

    onSubmit = () => {
        console.log(this.state.description);
        //this.props.addDescription(this.state.description); FIre method from parent component
    }

    handleChange = (e) => { // to change state everytime you type -- question: value
        this.setState({
            [e.target.id]: e.target.value
        })
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
                            <Uploadfile />
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol >
                        {/* <MDBInput id='description' onChange={this.handleChange} type="textarea" label="Enter the profile description here" rows="5" />
                        <MDBBtn onClick={this.onSubmit} color="primary">
                            <MDBIcon icon="save" className="mr-1" /> Save
                        </MDBBtn> */}
                        <MDBInputGroup
                            containerClassName="mb-3"
                            append={
                                <MDBBtn
                                    color="mdb-color"
                                    outline
                                    className="m-0 px-3 py-2 z-depth-0"
                                >
                                    Save
                                </MDBBtn>
                            }
                            inputs={
                            < select className="browser-default custom-select" >
                                {this.input}
                            </select >}
                        />
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
