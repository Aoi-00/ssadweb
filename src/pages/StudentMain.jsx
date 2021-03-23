import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { fetchLeaderboard } from '../Redux/Actions/GameActions'
import LeaderBoard from '../components/homepage/LeaderBoard'
import StudentSubmit from '../components/StudentSubmit'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'


class StudentMain extends Component {
    componentDidMount() {
        this.props.fetchLeaderboard();
        this.props.fetchPosts();
        console.log(localStorage.getItem("email"));
        //console.log(this.props)
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    render() {
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <br />
                    <h2>LeaderBoard</h2>
                    <hr />
                    <LeaderBoard leaderboard={this.props.leaderboard} />

                    <br />

                    <h2>Personal Submission</h2>
                    <StudentSubmit leaderboard={this.props.leaderboard} />
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
StudentMain.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    fetchLeaderboard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    twitter: state.twitter.items,
    leaderboard: state.game.records
});

export default connect(mapStateToProps, { fetchPosts, fetchLeaderboard })(StudentMain)
