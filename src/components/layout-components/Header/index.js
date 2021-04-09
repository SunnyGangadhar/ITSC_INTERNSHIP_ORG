import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from '@reach/router';
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import projectLogo from '../../../assets/images/UC-2axqrm7.jpeg';

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
          <NavbarBrand to="/" title="University of Cincinnati">
            <i className="bg-transparent">
              <img
                alt="University of Cincinnati"
                className = "image-logo"
                src={projectLogo}/>
            </i>
            {/* <span className="text-white pl-2"></span> */}
          </NavbarBrand>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/ocat">OCAT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/veaas">VEAAS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/devops">DEVOPS</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  </Fragment>;

export default Header;
