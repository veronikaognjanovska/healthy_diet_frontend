import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {

    return (
        <footer className={"text-lg-start bg-my"}>
            <div className={"ml-3 p-2"}>
                <span>About me</span>
                <span>181045</span>
                <span>FINKI 2021</span>
            </div>
        </footer>
    );

}

export default Footer;


