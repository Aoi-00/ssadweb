import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBInputGroup } from "mdbreact"
import CompetitorDetail from '../components/challengerpage/CompetitorDetail'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { getStudentInfo } from '../Redux/Actions/AuthAction'
import { sendComment } from '../Redux/Actions/GameActions'

class Competitor extends Component {
    state = {
        studid: localStorage.getItem("compstudid"),
        compid: localStorage.getItem("compid"),
        comment: ''
    }
    componentDidMount() {
        this.getCompetitorDetails()
    }
    getCompetitorDetails() {
        const form = {
            id: this.state.studid
        }
        this.props.getStudentInfo(form)
    }
    SendComment = () => {
        const form = {
            compid: this.state.compid,
            comment: this.state.comment
        }
        this.props.sendComment(form)
        this.props.history.push('/challenger')
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    GoBack = () => {
        this.props.history.push('/challenger')
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
                    <MDBRow>
                        <MDBCol size="6">
                            <h3>Competitor Detail</h3>
                            <hr />
                            <CompetitorDetail student={this.props.student} />
                        </MDBCol>
                        <MDBCol size="6">
                            <h3>Compose a message to your competitor</h3>
                            <hr />
                            <MDBInput id='comment' value={this.state.comment} label="Comment" icon="comment" onChange={this.handleChange}>
                            </MDBInput>
                            <MDBBtn
                                onClick={this.SendComment}
                                color="blue"
                                className="m-0 px-3 py-2 z-depth-0">
                                Send Message
                            </MDBBtn>
                            <MDBBtn
                                onClick={this.GoBack}
                                color="red"
                                className="m-0 px-3 py-2 z-depth-0">
                                Back
                            </MDBBtn>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
Competitor.Proptypes = {
    getStudentInfo: Proptypes.func.isRequired,
    sendComment: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
    student: state.auth.studentinfo,
})
export default connect(mapStateToProps, { getStudentInfo, sendComment })(Competitor)