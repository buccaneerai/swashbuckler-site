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
            <NavLink href="https://docs.swashbuckler.ai/quickstart">Get Started</NavLink>
          </NavItem>
          <NavItem center left>
            <NavLink href="https://docs.swashbuckler.ai">Docs</NavLink>
          </NavItem>
          <NavItem center left>
            <NavLink href="https://docs.swashbuckler.ai">Guides</NavLink>
          </NavItem>
          <NavItem center left>
            <NavLink href="https://github.com/buccaneerai/swashbuckler">
              <i className='fab fa-github'/>{' '}
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default _Navbar;
