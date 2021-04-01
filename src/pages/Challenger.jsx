import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn } from "mdbreact"
import Competitorlist from '../components/challengerpage/Competitorlist'
import Challengerlist from '../components/challengerpage/Challengerlist'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getMyCompetitors, getChallengers } from '../Redux/Actions/GameActions'
import friendly from '../assets/friendly.jpg'

class Challenger extends Component {
    state = {
        studid: localStorage.getItem("studid")
    }
    componentDidMount() {
        this.getCompetitor();
        this.getChallengers();
    }
    getCompetitor() {
        const form = {
            requestorid: this.state.studid
        }
        this.props.getMyCompetitors(form)
    }
    getChallengers() {
        const form = {
            competitorid: this.state.studid
        }
        this.props.getChallengers(form)
    }
    ViewCompetition = () => {
        this.props.history.push('/competitor')
    }
    ViewChallenge = () => {
        this.props.history.push('/challenge')
    }
    NotLoggedIn = () => {
        this.props.history.push('/logout')
    }
    CompeteMode = () => this.props.history.push('/compete')

    GoBack = () => { this.props.history.push("/studentmain") }


    render() {
        return (
            <div>
                <Navbar validateLogin={this.NotLoggedIn} />
                <br />
                <MDBContainer>
                    <MDBAnimation type="slideInDown">
                        <MDBRow center>
                            <MDBCol size="8">
                                <h3>Compete with your friends!</h3>
                                <hr />
                                <img src={friendly} href="#" width = "400" height = "400" onClick={this.CompeteMode} className="img-fluid" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBAnimation>
                    <br />
                    <MDBAnimation type="slideInDown">
                        <MDBRow>
                            <MDBCol size="12">
                                <h3>My Competitors Request</h3>
                                <hr />
                                <Competitorlist navigate={this.ViewCompetition} myCompetitors={this.props.competitors} />
                            </MDBCol>
                        </MDBRow>
                    </MDBAnimation>
                    <MDBAnimation type="slideInUp">
                        <MDBRow>
                            <MDBCol>
                                <h3>My Challengers</h3>
                                <hr />
                                <Challengerlist navigate={this.ViewChallenge} myChallenger={this.props.challengers} />
                            </MDBCol>


                        </MDBRow>
                        <MDBBtn color="red" onClick={this.GoBack}> Back</MDBBtn>
                    </MDBAnimation>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
Challenger.propTypes = {
    getMyCompetitors: PropTypes.func.isRequired,
    getChallengers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    competitors: state.game.competitors,
    challengers: state.game.challengers
});
export default connect(mapStateToProps, { getMyCompetitors, getChallengers })(Challenger)