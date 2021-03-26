import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";
import "../css/index.css";
import FacebookLogin from 'react-facebook-login'
import PropTypes from 'prop-types'
import { registerUser, emailChecking } from '../../Redux/Actions/AuthAction'
import { connect } from 'react-redux'

class RegisterForm extends React.Component {
  state = {
    collapseID: "",
    email: "",
    password: "",
    cfmpassword: "",
    usertype: "Student",
    name: "",
    fbimage: "",
    fbid: "",
    tutgrp: "TS1",
    fbdetails: false,
    loading: false
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  responseFacebook = (response) => {
    console.log(response)
    this.setState({
      fbid: response.id,
      fbimage: response.picture.data.url,
      email: response.email,
      name: response.name,
      fbdetails: true
    })
  }
  handleSelectList = (e) => {
    this.setState({
      tutgrp: e.target.value
    })
  }
  Validate = () => {
    const emailForm = {
      email: this.state.email
    }
    this.props.emailChecking(emailForm);
    console.log(emailForm);
    console.log(this.props.emailcheck); 
    this.Register();
    
  }
  Register = () => {
    const form = {
      fbid: this.state.fbid,
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      usertype: "Student",
      tutgrp: this.state.tutgrp
    }
    this.setState ({loading : true});
    this.props.registerUser(form);
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props.emailcheck)
  }
  componentWillReceiveProps(nextProps){ //to update state when prop changes
    //console.log(nextProps);
    var response = nextProps.registerstatus[0].response;
    if(response == "User Registered"){
      this.props.Navigate("/")
    }
    else{
      //Do some animation here
      alert("Register Error")
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const {loading} = this.state;
    let fbimage = (!this.state.fbdetails) ? <React.Fragment /> : <center> <img width="150" height="150" src={this.state.fbimage} className="img-fluid z-depth-1 rounded-circle" alt="" /></center>
    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Thank you for joining us!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Already have an account? Click the button below to go back
                  </h6>
                  <MDBNavLink to='/'>
                    <MDBBtn outline color="white">
                      Login
                  </MDBBtn>
                  </MDBNavLink>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />
                        {fbimage}
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Enter Full Name"
                          icon="address-card"
                          id="name"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Enter Email"
                          icon="envelope"
                          id="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Enter Password"
                          icon="lock"
                          type="password"
                          id="password"
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Confirm Password"
                          icon="lock"
                          type="password"
                          id="cfmpassword"
                          onChange={this.handleChange}
                        />
                        <select onChange={this.handleSelectList} value={this.state.tutgrp} id="tutgrp" className="browser-default custom-select">
                          <option value={'TS1'}>TS1</option>
                          <option value={'TS2'}>TS2</option>
                          <option value={'TS3'}>TS3</option>
                          <option value={'TS4'}>TS4</option>
                        </select>
                        <div className="text-center mt-4 black-text">
                          <MDBBtn onClick={this.Validate} color="white"disabled={loading} >
                          {loading && <span>Registering</span>}
                          {!loading && <span>Register</span>}
                          </MDBBtn>
                          <FacebookLogin
                            appId="892789337958489"
                            fields="name,email,picture"
                            cssClass="btn btn-outline white"
                            textButton="Facebook Register"
                            callback={this.responseFacebook}
                          />
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  emailChecking: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  registerstatus: state.auth.status,
  emailcheck: state.auth.emailcheck
});

export default connect(mapStateToProps, { registerUser, emailChecking })(RegisterForm);