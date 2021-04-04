import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBDropdownItem } from 'mdbreact';
import ganyu from '../../assets/ganyu.jpg';

class Navbar extends Component {
    /**
     * state
     * set collapsedID : ""
     * get username from local storage name
     * get usertype from local storage usertype
     */
    state = {
        collapseID: '',
        username: localStorage.getItem("name"),
        usertype: localStorage.getItem("usertype")
    };
    componentDidMount() {
        if (!this.state.username)
            this.props.validateLogin()
    }

    /**
     * ToogleCollapsed
     * @param {*} collapseID 
     * @returns 
     */
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

        /**
         * closeCollapsed
         * @param {*} collID 
         * @returns 
         */
    closeCollapse = collID => () => {
        const { collapseID } = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({ collapseID: '' });
    };

    /**
     * Navbar
     * @returns Navbar
     */
    render() {
        const { collapseID } = this.state;
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
        );
        if (this.state.usertype == "Professor") {
            return (
                <div>
                    <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
                        <MDBNavbarBrand href='/home' className='py-0 font-weight-bold'>
                            <img src={ganyu} height="50" alt="50" className="rounded-circle" />
                            <strong className='align-middle'>Ganyu</strong>
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
                                        to='/assignment'
                                    >
                                        <strong>Assignments</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/reporthome'
                                    >
                                        <strong>Report</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/seltut'
                                    >
                                        <strong>Marking</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <MDBIcon icon="user" /> {this.state.username}
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="/professorprofile">Profile</MDBDropdownItem>
                                            <MDBDropdownItem href='/logout'>Logout</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </div>
            )
        }
        else {
            return (
                <div>
                    <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
                        <MDBNavbarBrand href='/home' className='py-0 font-weight-bold'>
                            <img src={ganyu} height="50" alt="50" className="rounded-circle" />
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
                                        to='/studentmain'
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                    >
                                        <strong>Home</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/studentnews'
                                    >
                                        <strong>News</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/challenger'
                                    >
                                        <strong>Compete</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink
                                        onClick={this.closeCollapse('mainNavbarCollapse')}
                                        to='/assignment'
                                    >
                                        <strong>Assignments</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <MDBIcon icon="user" /> {this.state.username}
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="/studentprofile">Profile</MDBDropdownItem>
                                            <MDBDropdownItem href='/logout'>Logout</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </div>
            )
        }
    }
}
export default Navbar