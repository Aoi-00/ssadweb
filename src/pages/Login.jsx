import React, { Component } from 'react'
import Footer from '../components/Footer'
import GuestNavbar from '../components/GuestNavBar'
import LoginForm from '../components/LoginForm'

class Login extends Component {
    Navigate = (val) => {
        this.props.history.push(val)
    }
    componentDidMount() {
        console.log(localStorage.getItem("email"))
    }
    render() {
        return (
            <div>
                <GuestNavbar />
                <LoginForm Navigate={this.Navigate} />
                <Footer />
            </div>
        )
    }
}
export default Login