import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'

 class Login extends Component {
    Navigate = (val) => {
        this.props.history.push(val)
    }
    render() {
        return (
            <div>
                <LoginForm Navigate={this.Navigate}/>
            </div>
        )
    }
}
export default Login