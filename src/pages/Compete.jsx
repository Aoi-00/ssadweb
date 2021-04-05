import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn } from "mdbreact"
import ClassmateList from '../components/competepage/ClassmateList'
import StudentAssignment from '../components/competepage/StudentAssignment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchLeaderboard, myCompletedTutorial, sendCompeteRequest } from '../Redux/Actions/GameActions'
import { getClassmate } from '../Redux/Actions/AuthAction'

class Compete extends Component {
    /**
     * state
     * set tutgrp to local storage tutgrp
     * set name to local storage name
     * set studid to localstorae studid
     * set competitor, competitorid to ""
     * set Assignmentdisplay to false
     */
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        name: localStorage.getItem("name"),
        studid: localStorage.getItem("studid"),
        email: localStorage.getItem("email"),
        competitor: '',
        competitorid: '',
        Assignmentdisplay: false
    }
    componentDidMount() {
        this.props.fetchLeaderboard();
        this.getMycompletedTutList();
        this.getClassmate();
    }
    /**
     * getMycompletedTutList
     */
    getMycompletedTutList() {
        const form = {
            studid: this.state.studid
        }
        this.props.myCompletedTutorial(form)
    }
    /**
     * CompetitorSelect
     * @param {*} name
     * @param {*} competitorid 
     */
    CompetitorSelect = (name, competitorid) => {
        this.setState({ competitor: name, competitorid: competitorid, Assignmentdisplay: true })
    }
    getClassmate() {
        const form = {
            tutgrp: this.state.tutgrp,
            email: this.state.email
        }
        this.props.getClassmate(form)
    }

    /**
     * CreateNotification
     * @param {*} leaderboardid 
     * @param {*} tutid 
     */
    CreateNotification = (leaderboardid, tutid) => {
        const form = {
            requestorid: localStorage.getItem("studid"),
            competitorid: this.state.competitorid,
            leaderboardid: leaderboardid,
            tutid: tutid
        }
        this.props.sendCompeteRequest(form);
        this.props.history.push("/challenger")
    }
    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }

    /**
     * GoBack
     * navigate to studentmain
     */
    GoBack = () => { this.props.history.push("/studentmain") }

    /**
     * Compete page
     * @returns Compete page
     */
    render() {
        console.log(this.props.classmate)
        let currentclass = this.props.leaderboard.filter(x => x.tutgrp === this.state.tutgrp && x.name !== this.state.name)
        let classMates = [...new Set(currentclass.map(item => ({ id: item.id, name: item.name, studid: item.studid })))];
        let competeDisplay = (this.state.competitor === '') ? <h3>My classmates</h3> : <h3>Competing with {this.state.competitor}</h3>;
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <br />
                <MDBContainer>
                    <MDBRow>

                        <MDBCol size="4">
                            <MDBAnimation type="slideInLeft" >
                                {competeDisplay}
                                <hr />
                                <ClassmateList classmates={this.props.classmate} competitorSelect={this.CompetitorSelect} />
                            </MDBAnimation>

                        </MDBCol>


                        <MDBCol size="8">
                            {this.state.Assignmentdisplay &&
                                <MDBAnimation type="slideInRight">
                                    <h3>Which Assignment to compete?</h3>
                                    <hr />
                                    <StudentAssignment myTut={this.props.mytut} notification={this.CreateNotification} />
                                </MDBAnimation>
                            }
                        </MDBCol>

                    </MDBRow>
                    <MDBAnimation type="slideInLeft" >
                        <MDBBtn color="red" onClick={this.GoBack} > Back
                       </MDBBtn>
                    </MDBAnimation>
                </MDBContainer>
                <br />
                <Footer />
            </div >
        )
    }
}
Compete.propTypes = {
    fetchLeaderboard: PropTypes.func.isRequired,
    myCompletedTutorial: PropTypes.func.isRequired,
    sendCompeteRequest: PropTypes.func.isRequired,
    getClassmate: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    leaderboard: state.game.records,
    mytut: state.game.completedtut,
    classmate: state.auth.mates
});

export default connect(mapStateToProps, { fetchLeaderboard, getClassmate, myCompletedTutorial, sendCompeteRequest })(Compete)