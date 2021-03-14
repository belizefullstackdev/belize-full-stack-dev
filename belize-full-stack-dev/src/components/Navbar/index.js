import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElement';

const Navbar = ({ toggle }) => {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>BFSD</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Examples</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
