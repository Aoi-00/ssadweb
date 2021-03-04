import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { ReactComponent as Logo } from '../assets/logo.svg';

class Navbar extends Component {
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
                                    exact
                                    to='/home'
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                >
                                    <strong>Home</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/tutorial'
                                >
                                    <strong>Tutorial</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/marking'
                                >
                                    <strong>Marking</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    onClick={this.closeCollapse('mainNavbarCollapse')}
                                    to='/logout'
                                >
                                    <strong>Logout</strong>
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        )
    }
}
export default Navbar