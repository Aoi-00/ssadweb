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
import "./css/index.css";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { emailLogin, facebookLogin } from '../Redux/Actions/AuthAction'
import FacebookLogin from 'react-facebook-login'

class LoginForm extends React.Component {
  state = {
    email: '',
    userpassword: '',
    fbid: '',
    fblogin: false,
    emaillogin: false
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
    this.setState({ emaillogin: true })
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
    var email = nextProps.loginstatus[0].email
    if(this.state.fblogin){
      localStorage.setItem("fbid", nextProps.loginstatus[0].fbid)
      localStorage.setItem("name", nextProps.loginstatus[0].name)
      localStorage.setItem("email", nextProps.loginstatus[0].email)
      localStorage.setItem("usertype", nextProps.loginstatus[0].usertype)
      this.props.Navigate("/home")
    }
    else if (this.state.emaillogin) {
      localStorage.setItem("fbid", nextProps.loginstatus[0].fbid)
      localStorage.setItem("name", nextProps.loginstatus[0].name)
      localStorage.setItem("email", nextProps.loginstatus[0].email)
      localStorage.setItem("usertype", nextProps.loginstatus[0].usertype)
      this.props.Navigate("/home")
    }
    else {
      alert("Wrong email or password")
    }
  }

  render() {
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
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Enter Password"
                          icon="lock"
                          type="password"
                          id="userpassword"
                          onChange={this.handleChange}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="white" onClick={this.EmailLogin}>Login</MDBBtn>
                          <FacebookLogin
                            appId="438326617514737"
                            autoLoad={true}
                            fields="name,email,picture"
                            cssClass="btn btn-outline white"
                            callback={this.responseFacebook}
                          />

                          <hr className="hr-light" />
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