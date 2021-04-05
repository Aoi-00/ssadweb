
import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from "mdbreact";
import TutorialTable from '../components/assignmentpage/TutorialTable'
import AddTutorial from '../components/assignmentpage/AddTutorial'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showTutorials, deleteTutorial, addTutorial, showProfTutorial } from '../Redux/Actions/TutorialAction'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';

class Assignment extends Component {
    /**
     * state
     * set tutgrp to local storage tutgrp
     * set name to local storage name
     */
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        name: localStorage.getItem("name"),
    }
    componentDidMount() {
        //this.props.showAllTutorials();
        this.GetTutorials()
    }
    /**
     * GetTutorials
     * set a const form tut grp and name
     */
    GetTutorials = () => {
        const form = {
            tutgrp: this.state.tutgrp,
            name: this.state.name
        }
        this.props.showProfTutorial(form);
        
    }
    /**
     * Navigate
     * @param {*} tutid navigate to questions page 
     */
    Navigate = (tutid) => {
        this.props.history.push('/question/' + tutid)
    }

    /**
     * DelTutorial
     * @param {*} tutid Deletion of tutorial
     */
    DelTutorial = (tutid) => {
        const form = {
            tutid: tutid
        }
        this.props.deleteTutorial(form)
    }
    /**
     * NotLoggedIn 
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    /**
     * AddTutorial
     * @param {*} form 
     */
    AddTutorial = (form) => {
        //Submit data to my api
        this.props.addTutorial(form);
    }
    /**
     * Onback
     * navigate to home
     */
    OnBack = () => {
        this.props.history.push('/home')
    }
    /**
     * Assignment page
     * @returns Assignemnt page
     */
    render() {
        return (
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />
                    
                        <MDBRow >
                            <MDBCol>
                            <MDBAnimation type="slideInDown" >
                                <h2>Assignment List</h2>
                                <hr />
                                <TutorialTable deleteTut={this.DelTutorial} navigate={this.Navigate} tutorial={this.props.tutorialtable} />
                                </MDBAnimation>
                                <MDBAnimation type="slideInUp">
                                <br />
                                <h3>Assignment Creation</h3>
                                <hr />
                                <AddTutorial addTut={this.AddTutorial} onBack={this.OnBack} />
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    
                </MDBContainer>
                <Footer />
            </React.Fragment>
        )
    }
}

Assignment.propTypes = {
    showTutorials: PropTypes.func.isRequired,
    deleteTutorial: PropTypes.func.isRequired,
    addTutorial: PropTypes.func.isRequired,
    showProfTutorial: PropTypes.func.isRequired
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

// connection this component to database.
export default connect(mapStateToProps, { showProfTutorial, showTutorials, deleteTutorial, addTutorial })(Assignment)