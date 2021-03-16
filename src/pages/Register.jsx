import React, { Component } from 'react'
import Footer from '../components/Footer'
import GuestNavbar from '../components/GuestNavBar'
import RegisterForm from '../components/RegisterForm'

class Register extends Component {
    Navigate = (val) => {
        this.props.history.push(val)
    }
    render() {
        return (
            <div>
                <GuestNavbar />
                <RegisterForm Navigate={this.Navigate} />
                <Footer />
            </div>
        )
    }
}
export default Register