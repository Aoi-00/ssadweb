import React, { Component } from 'react'
import { MDBInput, MDBBtn } from "mdbreact";
//Connect to DB
import { connect } from 'react-redux'
import { testCall } from '../Redux/Actions/AuthAction'


class Textbox extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmit = () => {
        const post = {
            param1: this.state.email,
            param2: this.state.password
        }
        //Send Data to DB
        this.props.testCall(post);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.status)
    }
    render() {
        return (
            <div>
                <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <MDBInput onChange={this.handleChange} label="Type your email" id="email" icon="envelope" group type="email" validate error="wrong"
                            success="right" />
                        <MDBInput onChange={this.handleChange} label="Type your password" icon="lock" id="password" group type="password" validate />
                    </div>
                    <div className="text-center">
                        <MDBBtn onClick={this.onSubmit}>Login</MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    status: state.auth.status
});

export default connect(mapStateToProps , { testCall })(Textbox)