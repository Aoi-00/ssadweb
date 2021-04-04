import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup, MDBAnimation } from "mdbreact"
import Uploadfile from '../components/share/Uploadfile'
import StudentInfo from '../components/marking/StudentInfo'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getProfInfo, updateProfile, facebookAccountLink } from '../Redux/Actions/AuthAction'
import { showTutorials } from '../Redux/Actions/TutorialAction'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import FacebookLogin from 'react-facebook-login'
import ProfProfileCard from '../components/profprofile/ProfProfileCard'

class ProfessorProfile extends Component {
    /**
     * state
     * set tutgrp to local storage tutgrp
     * set studid to local storage studid
     * set email to local storage email
     * set picture to local storage picture
     * set name to local storage name
     * set fbid to local storage fbid
     * set fbDisplay to false
     * set emailError to ""
     */
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        studid: localStorage.getItem("studid"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        name: localStorage.getItem("name"),
        fbid: localStorage.getItem("fbid"),
        fbDisplay: false,
        emailError:"",
    }
    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    componentDidMount() {
        if (this.state.fbid == '') {
            this.setState({ fbDisplay: true })
        }
        this.getProfDetails();
        this.props.showTutorials();
    }
/**
 * getProfDetails
 */
    getProfDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getProfInfo(form)
    }
/**
 * onChoose
 */
    onChoose = (e) => {
        this.setState({
            tutgrp: e.target.value
        });
    }
/**
 * validate
 * Error handling when field is empty
 */
    validate = () => {
        let emailError = "";
        if (!this.state.email){
            emailError = "Email cannot be empty";
        }
        else {
            if (!this.state.email.includes('@')){
                emailError = "Invalid email";
            }
        }
        if (emailError){
            this.setState({emailError});
            return false;
        }
        return true;
    }
/**
 * onSubmitAll
 */
    onSubmitAll = () => {
        const form = {
            id: this.state.studid,
            name: this.state.name,
            fbid: this.state.fbid,
            email: this.state.email,
            picture: this.state.picture,
            tutgrp: this.state.tutgrp
        }
        const isValid = this.validate();

        if (isValid){
            this.setState({emailError: ""})
            this.props.updateProfile(form);
            localStorage.setItem("picture", this.state.picture)
            localStorage.setItem("tutgrp", this.state.tutgrp)
            localStorage.setItem("email", this.state.email)
            localStorage.setItem("name", this.state.name)
            localStorage.setItem("fbid", this.state.fbid)
            this.props.history.push("/home")
        }
        
    }
/**
 * GoBack
 * navigate to home
 */
    GoBack = ()=> { this.props.history.push("/home")}

    /**
     * handleChange
     * @param {*} e  handle all the changes that were received
     */
    handleChange = (e) => { // to change state everytime you type -- question: value
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    /**
     * PictureUpload
     * @param {*} pic 
     */
    PictureUploaded = (pic) => {
        console.log(pic)
        this.setState({ picture: pic });
    }

    /**
     * responseFacebook
     * @param {*} response 
     */
    responseFacebook = (response) => {
        this.setState({
            fbid: response.id,
            fblogin: true
        })
        this.FbLink(response.id)
    }
    /**
     * FbLink
     * @param {*} id 
     */
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

    /**
     * Professor Profile page
     * @returns Professor Profile page
     */
    render() {
        let facebookBtn = (this.state.fbDisplay) ? <FacebookLogin appId="892789337958489"
            textButton="Link with Facebook"
            fields="name,email,picture"
            cssClass="btn btn-sm blue white-text"
            callback={this.responseFacebook}
        /> : <React.Fragment> You have successfully linked your account with facebook </React.Fragment>
        return (
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <br />
                <MDBContainer>
                    <MDBRow>
                        
                        <MDBCol size="5" lg = "5" sm = "12" >
                        <MDBAnimation type="slideInLeft">
                            <div>
                                <h3>Live Preview</h3>
                                <hr />
                                {/* The pic will take very long to load */}
                                <ProfProfileCard profilepic={this.state.picture} studname={this.state.name} studemail={this.state.email} studtutgrp={this.state.tutgrp} />
                            </div>
                            </MDBAnimation>
                        </MDBCol>
                        
                        
                        <MDBCol  size="7" lg = "7" sm = "12">
                        <MDBAnimation type="slideInRight">
                            <h3>Update Profile</h3>
                            <hr />
                            <MDBInput id='name' value={this.state.name} label="Full Name" icon="user" onChange={this.handleChange} >
                            </MDBInput>
                            <MDBInput id='email' value={this.state.email} label="E-mail address" icon="envelope" onChange={this.handleChange} >
                            </MDBInput>
                            <div style = {{fontSize: 15, color:"rgb(255, 61, 61)"}} > {this.state.emailError} </div>
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
                            <br />
                            <br />
                            <MDBBtn
                                onClick={this.GoBack}
                                color="red"
                                className="m-0 px-3 py-2 z-depth-0">
                                Back
                            </MDBBtn>
                            </MDBAnimation>
                        </MDBCol>
                        
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </React.Fragment>
        )
    }
}
ProfessorProfile.Proptypes = {
    getProfInfo: Proptypes.func.isRequired,
    showTutorials: Proptypes.func.isRequired,
    facebookAccountLink: Proptypes.func.isRequired,
    updateProfile: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    student: state.auth.profinfo,
    allTutorials: state.tutorial.tutorialgrp,

})
export default connect(mapStateToProps, { getProfInfo, showTutorials, updateProfile, facebookAccountLink })(ProfessorProfile)
