import React, { useState } from "react";
import "./NavBar.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function NavBar () {
            const [collapsed, setCollapsed] = useState(true);
          
            const toggleNavbar = () => setCollapsed(!collapsed);
          
            return (
              <div>
                <Navbar color="faded" light>
                  <NavbarBrand href="/" className="mr-auto">Nasa's Photo Of The Day</NavbarBrand>
                  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink href="/components/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/">Login</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            );
          }


export default NavBar;  