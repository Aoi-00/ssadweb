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
    this.setState({ status: this.state.status++ })
    this.props.emailLogin(post);
  }
  responseFacebook = (response) => {
    this.FbLogin(response.id)
  }
  FbLogin = (id) => {
    const post = {
      fbid: id
    }
    this.props.facebookLogin(post);
  }
  componentWillReceiveProps(nextProps) {
    var validuser = nextProps.loginstatus[0].userExists
    if (validuser == 1) {
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <MDBNavLink to='/register'>
                    <MDBBtn outline color="white">
                      Learn More
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
                          <MDBBtn outline color="white" onClick={this.EmailLogin}>Login</MDBBtn>
                          <FacebookLogin
                            appId="438326617514737"
                            autoLoad={true}
                            fields="name,email,picture"
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