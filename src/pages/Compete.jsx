import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import ClassmateList from '../components/competepage/ClassmateList'
import StudentAssignment from '../components/competepage/StudentAssignment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchLeaderboard, myCompletedTutorial } from '../Redux/Actions/GameActions'

class Compete extends Component {
    state = {
        tutgrp: localStorage.getItem("tutgrp"),
        name: localStorage.getItem("name")
    }
    componentDidMount() {
        this.props.fetchLeaderboard();
        this.getMycompletedTutList();
    }
    getMycompletedTutList(){
        const form = {
            name: this.state.name
        }
        this.props.myCompletedTutorial(form)
    }
    render() {
        var currentclass = this.props.leaderboard.filter(x => x.tutgrp === this.state.tutgrp)
        var classMates = [...new Set(currentclass.map(item => item.name))];

        return (
            <div>
                <Navbar />
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="4">
                            <h3>My classmates</h3>
                            <hr />
                            <ClassmateList classmates={classMates} />
                        </MDBCol>
                        <MDBCol size="8">
                            <h3>Which Assignment to compete?</h3>
                            <hr />
                            <StudentAssignment myTut={this.props.mytut} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </div>
        )
    }
}
Compete.propTypes = {
    fetchLeaderboard: PropTypes.func.isRequired,
    myCompletedTutorial: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    leaderboard: state.game.records,
    mytut: state.game.completedtut
});

export default connect(mapStateToProps, { fetchLeaderboard, myCompletedTutorial })(Compete)