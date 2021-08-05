import React from 'react';
import {withRouter} from "react-router-dom";
import './Login.css';
import logo from "../../assets/circle-cropped.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import UserService from "../../service/UserService";

class Register extends React.Component {

    static ingredients = ["0"];

    constructor(props) {
        super(props);
        this.state = {}

    }

    register = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let nameSurname = document.getElementById('nameSurname').value;
        let email = document.getElementById('email').value;
        let birthday = document.getElementById('birthday').value;
        UserService.register(username, password, nameSurname, email, birthday)
            .then((data) => {
                this.props.history.push(`/login`);
            })
    }
    registerWithFacebook = () => {
        console.log("not yet ")
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
                            <label htmlFor="name">Name and Surname</label>
                            <input type="text"
                                   className="form-control"
                                   id="nameSurname"
                                   name="nameSurname"
                                   value={this.state.nameSurname}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input type="text"
                                   className="form-control"
                                   id="email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Date of birth</label>
                            <input type="date"
                                   className="form-control"
                                   id="birthday"
                                   name="birthday"
                                   value={this.state.birthday}
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <button id="btn1" type="button" onClick={this.register}
                                    className={"btn btn-success btn-green float-left py-1 px-2 w-100 my-2"}>
                                Register
                            </button>
                        </div>
                        <div className="form-group">
                            <button id="btn2" type="button" onClick={this.registerWithFacebook}
                                    className={"btn btn-primary btn-green float-left py-1 px-2 w-100 my-2"}>
                                Register in with Facebook
                            </button>
                        </div>
                        <div className="form-group">
                            <button id="btn2" type="button"
                                    className={"btn btn-light btn-green float-left py-1 px-2 w-100 my-2"}>
                                Log in?
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        );
    };


}

export default withRouter(Register);