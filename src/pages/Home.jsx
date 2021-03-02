import React, { Component } from 'react'
import Card from '../components/Card'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { fetchLeaderboard } from '../Redux/Actions/GameActions'
import LeaderBoard from '../components/LeaderBoard'


class Home extends Component {
    componentDidMount() {
        this.props.fetchLeaderboard();
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
                <MDBContainer>
                    <br />
                    <h2>LeaderBoard</h2>
                    <hr />
                    <LeaderBoard leaderboard={this.props.leaderboard} />
                    <br />
                    <h2>NTU Twitter Post</h2>
                    <hr />
                    <MDBRow>
                        {this.props.twitter && this.props.twitter.map(x => {
                            return (
                                <MDBCol lg="4">
                                    <Card post={x} />
                                </MDBCol>
                            )
                        })}
                    </MDBRow>
                    <br />
                </MDBContainer>
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
