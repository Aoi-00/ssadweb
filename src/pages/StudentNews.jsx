import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types'
import { fetchPosts } from '../Redux/Actions/TwitterAction'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow, MDBBtn } from "mdbreact"
import TwitterCard from '../components/TwitterCard'

class StudentNews extends Component {
    state = {
        usertype: localStorage.getItem("usertype")
    }
    componentDidMount() {
        if (this.state.usertype == "Professor")
            this.props.history.push("/home")
        this.props.fetchPosts();
    }

    GoBack=() => {this.props.history.push("/studentmain")}
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
                    <h2>NTU Twitter News</h2>
                    <hr />
                    <MDBRow>
                        {twitterPosts}
                    </MDBRow>
                    <br/>
                    <MDBBtn color="green" onClick = {this.GoBack} > Back
                       </MDBBtn>
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
