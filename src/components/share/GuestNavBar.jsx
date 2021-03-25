import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { ReactComponent as Logo } from '../../assets/logo.svg';

class GuestNavbar extends Component {
    state = {
        collapseID: ''
    };
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
    };
    render() {
        const { collapseID } = this.state;
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
        );
        return (

            <div>
                <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
                    <MDBNavbarBrand href='/home' className='py-0 font-weight-bold'>
                        <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
                        <strong className='align-middle'>SSAD Project</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={this.toggleCollapse('mainNavbarCollapse')}
                    />
                    <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/register'
                                >
                                    <strong>Register</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/logout'
                                >
                                    <strong>Login</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        )
    }
}
export default GuestNavbar