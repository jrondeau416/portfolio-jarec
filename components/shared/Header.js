import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import Link from 'next/link';
import auth0 from '../../services/auth0';


  const BsNavLink = (props) => {
      const { route, title } = props;
      return (
        <Link href={route}>
            <a className="nav-link port-navbar-link"> {title} </a>
        </Link>

      )
  }

  const Login = () => {
    return (
      <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
    )
  }

  const Logout = () => {
    return (
      <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">Logout</span>
    )
  }

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    const { isAuthenticated, user } = this.props;
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" light expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Jarec Rondeau</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink className="port-navbar-link" route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink className="port-navbar-link" route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink className="port-navbar-link" route="/portfolio" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink className="port-navbar-link" route="/blog" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink className="port-navbar-link" route="/cv" title="CV" />   
              </NavItem>
              { !isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Login />   
                </NavItem>
              }
              { isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Logout />   
                </NavItem>
              }
              { isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <span className="nav-link port-navbar-link"> {user.name} </span>   
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}