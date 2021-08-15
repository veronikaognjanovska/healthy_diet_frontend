import React from 'react';
import {withRouter} from "react-router-dom";
import './Login.css';
import logo from "../../assets/circle-cropped.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import UserService from "../../service/UserService";
import NotificationService from "../../notifications/NotificationService";

class Login extends React.Component {

    static ingredients = ["0"];

    constructor(props) {
        super(props);
        this.state = {}

    }

    login = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        UserService.login(username,password)
            .then((data) => {
                UserService.setLoggedInUser(data.data);
                NotificationService.success('Success!', 'User logged in successfully!')
                this.props.history.push(`/recipes`);
            }).catch(e=>{
                NotificationService.danger('Error!', 'User can not log in!')
        });
    }

    loginWithFacebook = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        // RecipeService.loginWithFacebook(username,password)
        //     .then((data) => {
        //         this.props.history.push(`/recipes`);
        //     })
    }

    togglePassword = () => {
        let password = document.getElementById('password');
        if (password.type === 'text') {
            password.type = 'password'
        } else {
            password.type = 'text'
        }
    }


    render() {
        return (
            <div className={"row px-4 form-part-1 mx-auto"}>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <img className={"logo-login"} src={logo} alt="logo"/>
                </div>

                <div className={"col-12 p-0"}>
                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <div className={"input-group-prepend"}>
                                    <button type={"button"} id={"btn4"} className={"input-group-text"}
                                            disabled={"true"}>
                                        <FontAwesomeIcon icon={faAt} className={"text-white"}/>
                                    </button>
                                </div>
                                <input type="text"
                                       className="form-control"
                                       id="username"
                                       name="username"
                                />
                            </div>
                        </div>
                        <div className={"col-12 p-0"}>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className={"input-group-prepend"}>
                                        <button type={"button"} id={"btn3"} className={"input-group-text"}
                                                disabled={"true"}>
                                            <FontAwesomeIcon icon={faEye} className={"text-white"}
                                                             onClick={this.togglePassword}/>
                                        </button>
                                    </div>
                                    <input type="password"
                                           className="form-control"
                                           id="password"
                                           name="password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button id="btn1" type="button" onClick={this.login}
                                    className={"btn btn-success btn-green float-left py-1 px-2 w-100 my-2"}>
                                Log in
                            </button>
                        </div>
                        <div className="form-group">
                            <button id="btn2" type="button" onClick={this.loginWithFacebook}
                                    className={"btn btn-primary btn-green float-left py-1 px-2 w-100 my-2"}>
                                Log in with Facebook
                            </button>
                        </div>
                        <div className="form-group">
                            <button id="btn2" type="button"
                                    className={"btn btn-light btn-green float-left py-1 px-2 w-100 my-2"}>
                                Register?
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        );
    };


}

export default withRouter(Login);