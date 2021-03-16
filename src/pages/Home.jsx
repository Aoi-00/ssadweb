import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { fetchLeaderboard } from '../Redux/Actions/GameActions'
import LeaderBoard from '../components/LeaderBoard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


class Home extends Component {
    componentDidMount() {
        this.props.fetchLeaderboard();
        this.props.fetchPosts();
        console.log(localStorage.getItem("email"))
    }
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <br />
                    <h2>LeaderBoard</h2>
                    <hr />
                    <LeaderBoard leaderboard={this.props.leaderboard} />
                    <br />
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    fetchLeaderboard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    twitter: state.twitter.items,
    leaderboard: state.game.records
});

export default connect(mapStateToProps, { fetchPosts, fetchLeaderboard })(Home)
