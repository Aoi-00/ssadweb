import React, { Component } from 'react'
import Footer from '../components/share/Footer'
import GuestNavbar from '../components/share/GuestNavBar'
import RegisterForm from '../components/registerpage/RegisterForm'

class Register extends Component {
    /**
     * Navigate
     * @param {*} val 
     */
    Navigate = (val) => {
        this.props.history.push(val)
    }
    /**
     * Register page
     * @returns Register page
     */
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