import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './router/Routes';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  state = {
    collapseID: ''
  };

  render() {
  
    const { collapseID } = this.state;

    return (
      <Provider store={Store}>
        <Router>
          <Navbar />
          <div className='flyout'>
            {collapseID && overlay}
            <main style={{ marginTop: '4rem' }}>
              <Routes />
            </main>  
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
