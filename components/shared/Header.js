// import React from 'react';
// import Link from 'next/link';

// class Header extends React.Component {
//     render() {
//         return (
//             <React.Fragment>









//                 <style jsx>
//                     {
//                         `
//                             a {
//                                 font-size: 20px;
//                             }
//                             .customClass {
//                                 color: red;
//                             }
//                         `
//                     }
//                 </style>
//             </React.Fragment>
//         );
//     }
// }

// export default Header;


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


  const BsNavLink = (props) => {
      const { route, title } = props;
      return (
        <Link href={route}>
            <a className="nav-link port-navbar-link"> {title} </a>
        </Link>

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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}