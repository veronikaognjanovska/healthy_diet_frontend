import React from 'react';
import './Header.css';
import logo from "../../assets/circle-cropped.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Header = (props) => {

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
                        <Link className={"nav-link"} to={`/recipes`}>HOME</Link>
                        <Link className={"nav-link"} to={`/edit/1`}>ADD NEW RECIPE</Link>
                        <Link className={"nav-link"} to={`/profile`}>PROFILE</Link>
                        <Link className={"nav-link"} to={`/healthy`}
                              onClick={() => props.onHealthyToday()}>HEALTHY TODAY</Link>
                    </Nav>
                    {/*{*/}
                    {/*    undefined === undefined &&*/}
                    {/*    <Nav className="mr-0">*/}
                    {/*        <Nav.Link href="/movies" className="gold">LOG IN</Nav.Link>*/}
                    {/*        <Nav.Link href="/movies" className="gold">REGISTER</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    undefined === undefined &&*/}
                    {/*    <Nav className="mr-0">*/}
                    {/*        <Nav.Link href="/movies" className="gold">LOGOUT</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*}*/}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );

}

export default Header;


