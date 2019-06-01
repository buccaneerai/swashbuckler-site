import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const _Navbar = function _Navbar() {
  return (
    <div>
      <Navbar color="light" dark expand="md" color="primary" style={{borderBottom: null}}>
        <NavbarBrand href="/">
          <span style={{fontFamily: '"GT America","Helvetica Neue",Helvetica,Arial,sans-serif'}}>
            <img src='/logo-white.png' style={{width: '2em'}}/>
            <span style={{alignVerticle: 'middle'}}>{' '}Swashbuckler</span>
          </span>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem center left>
            <NavLink href="/products/haven">Docs</NavLink>
          </NavItem>
          <NavItem center left>
            <NavLink href="products/krakens">Guides</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default _Navbar;
