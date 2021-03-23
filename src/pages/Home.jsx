import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
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
        usertype: localStorage.getItem("usertype")
    }
    componentDidMount() {
        if(this.state.usertype == "Student")
            this.props.history.push("/studentmain")
        this.props.fetchLeaderboard();
        this.props.fetchPosts();
    }
    render() {
        let twitterPosts = this.props.twitter.map(x => {
            return (
                <TwitterCard key={x.id_str} post={x} />
            )
        })
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <br />
                    <h2>LeaderBoard</h2>
                    <hr />
                    <LeaderBoard leaderboard={this.props.leaderboard} />
                    <br />
                    <h2>NTU Twitter News</h2>
                    <hr />
                    <MDBRow>
                        {twitterPosts}
                    </MDBRow>
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
