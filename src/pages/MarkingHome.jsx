import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact';
import { showTutorials, showUserTutorial } from '../Redux/Actions/TutorialAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';

class MarkingHome extends Component {
    /**
     * state
     * set tutgrp to local storage tutgrp
     */
    state = {
        tutgrp: localStorage.getItem("tutgrp")
    }
    componentDidMount() {
        //this.props.showAllTutorials();
        this.GetTutorials()
    }
    /**
     * getTutorials
     */
    GetTutorials = () => {
        const form = {
            tutgrp: this.state.tutgrp
        }
        this.props.showUserTutorial(form);
    }
/**
 * GoBack
 */
    GoBack = () => { this.props.history.push('/home') }
/**
 * NotLoggedIn
 */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }

    /**
     * ViewTutorial
     * @param {*} tutid 
     */
    ViewTutorial = (tutid) => {
        var tutgrp = this.props.tutorialtable.filter(x => x.tutid == tutid).map(z => z.tutgrp)
        localStorage.setItem("seltutgrp", tutgrp)
        localStorage.setItem("selectedtutid", tutid)
        this.props.history.push('/student/' + tutid)
    }

    /**
     * MarkingHome page
     * @returns MarkingHome page
     */
    render() {
        let tutorialgrp = this.props.tutorialtable.map(x => {
            return (
                <tr key={x.tutid}>
                    <td>{x.tutname}</td>
                    <td>{x.tutgrp}</td>
                    <td>{x.createdby}</td>
                    <td><MDBBtn size="sm" color="green" onClick={() => this.ViewTutorial(x.tutid)}> Select </MDBBtn></td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />
                    <MDBAnimation type="slideInUp">
                        <MDBRow>
                            <MDBCol size="12">
                                <h2>Select Assignment to Mark</h2>
                                <hr />
                                <MDBTable striped>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Assignment Name</th>
                                            <th>Tutorial Group</th>
                                            <th>Created by</th>
                                            <th>Select</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {tutorialgrp}
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn color="red" onClick={this.GoBack} > Back
                       </MDBBtn>
                    </MDBAnimation>
                </MDBContainer>

                <Footer />
            </React.Fragment>
        )
    }
}
MarkingHome.propTypes = {
    showTutorials: PropTypes.func.isRequired,
    showUserTutorial: PropTypes.func.isRequired
}

//This is from the Reducers
//state.Rootreducer.TutorialReducers
const mapStateToProps = state => ({
    tutorialtable: state.tutorial.tutorialgrp,
});

export default connect(mapStateToProps, { showTutorials, showUserTutorial })(MarkingHome)