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
  state = {
    email: '',
    userpassword: '',
    fbid: '',
    fblogin: false,
    emaillogin: false,
    loading: false,
    wrongauth: false,
  };
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  EmailLogin = () => {
    const post = {

      email: this.state.email,
      password: this.state.userpassword

    }
    this.setState({
      loading: !this.state.loading,
      emaillogin: true
    });
    this.props.emailLogin(post);
  }
  responseFacebook = (response) => {
    this.setState({
      fbid: response.id,
      fblogin: true
    })
    this.FbLogin(response.id)
  }
  FbLogin = (id) => {
    const post = {
      fbid: id
    }
    this.props.facebookLogin(post);
  }
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
        wrongauth: !this.state.wrongauth
      })
    }
  }

  render() {
    const { loading } = this.state;
    const { wrongauth } = this.state;
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
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Enter Password"
                          icon="lock"
                          type="password"
                          id="userpassword"
                          value={this.state.userpassword}
                          onChange={this.handleChange}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="white" onClick={this.EmailLogin} disabled={loading} >
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
                          {wrongauth && <h2 className="red-text">Wrong username or password</h2>}
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