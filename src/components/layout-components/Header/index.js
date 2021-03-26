import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from '@reach/router';
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import projectLogo from '../../../assets/images/react.svg';

const Header = ({ headerShadow }) =>
  <Fragment>
    <div className="header-nav-wrapper header-nav-wrapper-lg" />
    <div
      className={clsx(
        `app-header bg-second header-nav-wrapper header-nav-wrapper-lg w-100 navbar-light`,
        { 'app-header--shadow': headerShadow },
      )}>
      <div className="container-fluid">
        <Nav pills className="mr-auto align-items-center">
          <NavbarBrand to="/" title="Bamburgh React UI Kit with Reactstrap Free">
            <i className="bg-transparent">
              <img
                alt="Bamburgh React UI Kit with Reactstrap Free"
                style={{ width: `50px` }}
                src={projectLogo}
              />
            </i>
            <span className="text-white pl-2">Bamburgh</span>
          </NavbarBrand>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/example-page">Template Page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="#/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} disabled className="d-block mr-1" to="#/">Disabled</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  </Fragment>;

export default Header;
