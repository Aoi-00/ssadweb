import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { fetchLeaderboard } from '../Redux/Actions/GameActions'
import LeaderBoard from '../components/homepage/LeaderBoard'
import Navbar from '../components/share/Navbar'
import Footer from '../components/share/Footer'
import TwitterCard from '../components/homepage/TwitterCard'



class Home extends Component {
    state = {
        usertype: localStorage.getItem("usertype"),
        tutgrp: localStorage.getItem("tutgrp")
    }
    componentDidMount() {
        if (this.state.usertype == "Student")
            this.props.history.push("/studentmain")
        this.props.fetchLeaderboard();
        this.props.fetchPosts();
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    render() {
        let twitterPosts = this.props.twitter.map(x => {
            return (
                <TwitterCard key={x.id_str} post={x} />
            )
        })
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <MDBContainer>
                    <MDBAnimation type="slideInDown" count={1}>
                        <br />
                        
                        <h2>LeaderBoard</h2>
                        <hr />
                        <LeaderBoard leaderboard={this.props.leaderboard} tutgrp={this.state.tutgrp} />
                        <br />
                    </MDBAnimation >
                    <MDBAnimation type="slideInUp" count={1}>
                        <h2>NTU Twitter News</h2>
                        <hr />
                        <MDBRow>
                            {twitterPosts}
                        </MDBRow>
                    </MDBAnimation>

                </MDBContainer>
                <MDBBtn />
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
