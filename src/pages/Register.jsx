import React, { Component } from 'react'
import RegisterForm from '../components/RegisterForm'

class Register extends Component {
    Navigate = (val) => {
        this.props.history.push(val)
    }
    render() {
        return (
            <div>
                <RegisterForm Navigate={this.Navigate}/>
            </div>
        )
    }
}
export default Register