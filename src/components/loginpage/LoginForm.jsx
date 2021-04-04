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
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { emailLogin, facebookLogin } from '../../Redux/Actions/AuthAction'
import FacebookLogin from 'react-facebook-login'

class LoginForm extends React.Component {
  /**
   * Set default state of email, userpassword, fbid, emailError, passwwordError to "", 
   * Set fblogin emaillogin, loeading, wrongauth to false,
   * Set exceedtry to 0
   */
  state = {
    email: '',
    userpassword: '',
    fbid: '',
    fblogin: false,
    emaillogin: false,
    loading: false,
    wrongauth: false,
    emailError: "",
    passwordError: "",
    exceedtry: 0
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
/**
 * handleChange
 * @param {*} e  
 */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  /**
   * Validate
   * @returns errorhandling if there is an error 
   */
  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (this.state.email) {
      if (!this.state.email.includes('@')) {
        emailError = "invalid email";
      }
    }
    else {
      emailError = "email cannot be empty";
    }

    if (!this.state.userpassword) {
      passwordError = "password cannot be empty";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError })
      return false;
    }
    return true;
  };

  /**
   * EmailLogin
   */
  EmailLogin = () => {
    const post = {

      email: this.state.email,
      password: this.state.userpassword

    }
    const isValid = this.validate();
    if (isValid) {
      
      this.setState({
        loading: !this.state.loading,
        emaillogin: true,
        emailError: "",
        passwordError: ""
        
      });
      this.props.emailLogin(post);
     
    }
  }
  /**
   * responseFacebook
   * @param {*} response 
   */
  responseFacebook = (response) => {
    this.setState({
      fbid: response.id,
      fblogin: true
    })
    this.FbLogin(response.id)
  }
  /**
   * FbLogin
   * @param {*} id 
   */
  FbLogin = (id) => {
    const post = {
      fbid: id
    }
    this.props.facebookLogin(post);
  }
  /**
   * handleKeyPRess
   * @param {*} event  
   */
  handleKeyPress = (event) => {
    if (event.key === 'Enter')
      this.EmailLogin()
  }

  /**
   * componentWillReceiveProps
   * @param {*} nextProps 
   * set localstorage of the following: studid, fbid, name, email, usertype, tutgrp, picture
   * else errorhandling for wrong authentication
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginstatus.length !== 0) {
      //Correct Authentication 
      localStorage.setItem("studid", nextProps.loginstatus[0].id)
      localStorage.setItem("fbid", nextProps.loginstatus[0].fbid)
      localStorage.setItem("name", nextProps.loginstatus[0].name)
      localStorage.setItem("email", nextProps.loginstatus[0].email)
      localStorage.setItem("usertype", nextProps.loginstatus[0].usertype)
      localStorage.setItem("tutgrp", nextProps.loginstatus[0].tutgrp)
      localStorage.setItem("picture", nextProps.loginstatus[0].picture)
      this.props.Navigate("/home")
    }
    else {
      //Wrong authentication
      //This is used to manipulate the UI
      this.setState({
        loading: !this.state.loading,
        userpassword: '',
        email: '',
        wrongauth: true,
        exceedtry: this.state.exceedtry++
      })
      

      if (this.state.exceedtry > 2){
        
      }
      

      // if (this.state.wrongauthcount >= 5) {
      //   alert("Forgot your email or password? Please contact the admin.");
      // }

      /**
       * LoginForm
       */
    }
  }

  render() {

    const { loading } = this.state;
    const { wrongauth, exceedtry } = this.state;

  
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
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Don't have an account? Register here!
                  </h6>
                  <MDBNavLink to='/register'>
                    <MDBBtn outline color="white">
                      Register
                  </MDBBtn>
                  </MDBNavLink>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Login:
                        </h3>
                        <hr className="hr-light" />
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
                        <div style={{ fontSize: 20, color: "rgb(255, 61, 61)" }} > {this.state.emailError} </div>
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Enter Password"
                          icon="lock"
                          type="password"
                          id="userpassword"
                          value={this.state.userpassword}
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress}
                        />
                        <div style={{ fontSize: 20, color: "rgb(255, 61, 61)" }}> {this.state.passwordError}</div>
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="white" onClick={this.EmailLogin} disabled={loading}>
                            {loading && <span>Logging in</span>}
                            {!loading && <span>login</span>}
                          </MDBBtn>
                          <FacebookLogin
                            appId="892789337958489"
                            fields="name,email,picture"
                            cssClass="btn btn-outline white"
                            callback={this.responseFacebook}
                          />
                          <hr className="hr-light" />
                          {exceedtry >1 && <h3 className="red-text">Please Contact Admin</h3>}
                          {wrongauth  && <h3 className="red-text">Wrong username or password</h3>}
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

LoginForm.propTypes = {
  emailLogin: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loginstatus: state.auth.login
});

export default connect(mapStateToProps, { emailLogin, facebookLogin })(LoginForm);