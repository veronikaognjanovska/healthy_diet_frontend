import React from 'react';
import './Header.css';
import logo from "../../assets/circle-cropped.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import UserService from "../../service/UserService";

const Header = (props) => {

    let username = UserService.getLoggedInUser();

    return (
        <header className={"bg-my"}>
            <Navbar expand="lg" className="my-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-0 logo-nav">
                        <Navbar.Brand href="/home">
                            <img className={"logo"} src={logo} alt="logo"/>
                        </Navbar.Brand>
                    </Nav>
                    <Nav className="mr-0">
                        <Link className={"nav-link"} to={`/recipes`}
                              onClick={() => props.onHome()}>HOME</Link>
                        {
                            username !== undefined &&
                            <Link className={"nav-link"} to={`/recipes/add`}>ADD NEW RECIPE</Link>
                        }
                        {
                            username !== undefined &&
                            <Link className={"nav-link"} to={`/profile`}>PROFILE</Link>
                        }
                        {
                            username !== undefined &&
                            <Link className={"nav-link"} to={`/healthy`}
                                  onClick={() => props.onHealthyToday()}>HEALTHY TODAY</Link>
                        }
                        {
                            username === undefined &&
                            <Link className={"nav-link"} to={`/login`}>LOG IN</Link>
                        }
                        {
                            username === undefined &&
                            <Link className={"nav-link"} to={`/register`}>REGISTER</Link>
                        }
                        {
                            username !== undefined &&
                            <Link className={"nav-link"} to={`/logout`}>LOGOUT</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );

}

export default Header;


