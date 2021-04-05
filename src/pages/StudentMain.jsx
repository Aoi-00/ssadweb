import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { fetchLeaderboard, myCompletedTutorial } from '../Redux/Actions/GameActions'
import LeaderBoard from '../components/homepage/LeaderBoard'
import StudentSubmit from '../components/studentmainpage/StudentSubmit'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'


class StudentMain extends Component {
    /**
     * state
     * set studid to local storage studid
     * get tutgrp to local storage tutgrp
     */
    state = {
        studid: localStorage.getItem("studid"),
        tutgrp: localStorage.getItem("tutgrp")
    }
    componentDidMount() {
        this.props.fetchLeaderboard();
        this.props.fetchPosts();
        this.getStudentSubmission()
    }
    /**
     * getStudentSubmission
     */
    getStudentSubmission() {
        const form = {
            studid: this.state.studid
        }
        this.props.myCompletedTutorial(form);
    }
    /**
     * NotLoggedIn
     */
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    /**
     * ViewMySubmission
     * @param {*} ldrid 
     */
    viewMySubmission = (ldrid) => {
        this.props.history.push('/submission/' + ldrid)
    }
    /**
     * StudentMain Page
     * @returns StudentMain page
     */
    render() {
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />

                <MDBContainer>
                    <MDBAnimation type="slideInDown" count={1}>
                        <br />
                        <h2>Leader Board</h2>
                        <hr />
                        {this.props.leaderboard && <LeaderBoard leaderboard={this.props.leaderboard} tutgrp={this.state.tutgrp} />}
                    </MDBAnimation>
                    <MDBAnimation type="slideInUp" count={1}>
                        <br />

                        <h2>Personal Submission</h2>
                        <StudentSubmit selectSubmission={this.viewMySubmission} mycompletedtask={this.props.mycompletedtask} />
                    </MDBAnimation>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
StudentMain.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    fetchLeaderboard: PropTypes.func.isRequired,
    myCompletedTutorial: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    twitter: state.twitter.items,
    leaderboard: state.game.records,
    mycompletedtask: state.game.completedtut
});

export default connect(mapStateToProps, { fetchPosts, fetchLeaderboard, myCompletedTutorial })(StudentMain)
