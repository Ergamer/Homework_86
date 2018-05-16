import React, {Fragment} from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Toolbar = ({user}) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <LinkContainer to="/" exact><a>My music</a></LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/" exact>
                    <NavItem>Artists</NavItem>
                </LinkContainer>
                {user ?
                    <Fragment>
                        <LinkContainer to="/profile" exact>
                            <NavItem>Hello, {user.username}!</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/logout" exact>
                            <NavItem>Logout</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/track_history" exact>
                            <NavItem>Track History</NavItem>
                        </LinkContainer>
                    </Fragment>
                    :
                    <Fragment>
                        <LinkContainer to="/register" exact>
                            <NavItem>Sign up</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login" exact>
                            <NavItem>Login</NavItem>
                        </LinkContainer>
                    </Fragment>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Toolbar;