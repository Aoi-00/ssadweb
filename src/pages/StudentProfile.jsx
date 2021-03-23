import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup } from "mdbreact"
import Uploadfile from '../components/share/Uploadfile'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo, updateProfile, facebookAccountLink } from '../Redux/Actions/AuthAction'
import { showTutorials } from '../Redux/Actions/TutorialAction'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import FacebookLogin from 'react-facebook-login'
import StudentProfileCard from '../components/studentprofile/StudentProfileCard'

class StudentProfile extends Component {

    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        studid: localStorage.getItem("studid"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        name: localStorage.getItem("name"),
        fbid: localStorage.getItem("fbid"),
        fbDisplay: false
    }

    componentDidMount() {
        if (this.state.fbid == '') {
            this.setState({ fbDisplay: true })
        }
        this.getStudentDetails();
        this.props.showTutorials();
    }

    getStudentDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }

    onChoose = (e) => {
        this.setState({
            tutgrp: e.target.value
        });
    }

    onSubmitAll = () => {
        const form = {
            id: this.state.studid,
            name: this.state.name,
            fbid: this.state.fbid,
            email: this.state.email,
            picture: this.state.picture,
            tutgrp: this.state.tutgrp
        }
        this.props.updateProfile(form);
        localStorage.setItem("picture", this.state.picture)
        localStorage.setItem("tutgrp", this.state.tutgrp)
        localStorage.setItem("email", this.state.email)
        localStorage.setItem("name", this.state.name)
        localStorage.setItem("fbid", this.state.fbid)
        this.props.history.push("/home")
    }

    handleChange = (e) => { // to change state everytime you type -- question: value
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    PictureUploaded = (pic) => {
        console.log(pic)
        this.setState({ picture: pic });
    }

    responseFacebook = (response) => {
        this.setState({
            fbid: response.id,
            fblogin: true
        })
        this.FbLink(response.id)
    }
    FbLink = (id) => {
        this.setState({
            fbid: id,
            fbDisplay: false
        })
        localStorage.setItem("fbid", this.state.fbid)
        const form = {
            id: this.state.studid,
            fbid: this.state.fbid
        }
        this.props.facebookAccountLink(form)
    }

    render() {
        let facebookBtn = (this.state.fbDisplay) ? <FacebookLogin appId="892789337958489"
            textButton="Link with Facebook"
            fields="name,email,picture"
            cssClass="btn btn-sm blue white-text"
            callback={this.responseFacebook}
        /> : <React.Fragment> You have successfully linked your account with facebook </React.Fragment>
        return (
            <React.Fragment>
                <Navbar />
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="5">
                            <div>
                                <h3>Live Preview</h3>
                                <hr />
                                {/* The pic will take very long to load */}
                                <StudentProfileCard profilepic={this.state.picture} studname={this.state.name} studemail={this.state.email} studtutgrp={this.state.tutgrp} />
                            </div>
                        </MDBCol>
                        <MDBCol size="7">
                            <h3>Update Profile</h3>
                            <hr />
                            <MDBInput id='name' value={this.state.name} label="Full Name" icon="user" onChange={this.handleChange} >
                            </MDBInput>
                            <MDBInput id='email' value={this.state.email} label="E-mail address" icon="envelope" onChange={this.handleChange} >
                            </MDBInput>
                            <Uploadfile picUpload={this.PictureUploaded} />
                            <select onChange={this.onChoose} value={this.state.tutgrp} id="tutgrp" className="browser-default custom-select">
                                <option value={'TS1'}>TS1</option>
                                <option value={'TS2'}>TS2</option>
                                <option value={'TS3'}>TS3</option>
                                <option value={'TS4'}>TS4</option>
                            </select>
                            <br /> <br />
                            {facebookBtn}
                            <br />
                            <MDBBtn
                                onClick={this.onSubmitAll}
                                color="blue"
                                className="m-0 px-3 py-2 z-depth-0">
                                Update Profile
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </React.Fragment>
        )
    }
}
StudentProfile.Proptypes = {
    getStudentInfo: Proptypes.func.isRequired,
    showTutorials: Proptypes.func.isRequired,
    facebookAccountLink: Proptypes.func.isRequired,
    updateProfile: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    student: state.auth.studentinfo,
    allTutorials: state.tutorial.tutorialgrp,

})
export default connect(mapStateToProps, { getStudentInfo, showTutorials, updateProfile, facebookAccountLink })(StudentProfile)
