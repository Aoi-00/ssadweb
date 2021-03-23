import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow } from "mdbreact"
import TwitterCard from '../components/homepage/TwitterCard'

class StudentNews extends Component {
    state = {
        usertype: localStorage.getItem("usertype")
    }
    componentDidMount() {
        if (this.state.usertype == "Professor")
            this.props.history.push("/home")
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
                    <br/>
                    <h2>NTU Assignment News</h2>
                    <hr />
                    <MDBRow>
                        {twitterPosts}
                    </MDBRow>
                    <br/>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
StudentNews.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    twitter: state.twitter.items,
});

export default connect(mapStateToProps, { fetchPosts })(StudentNews)
