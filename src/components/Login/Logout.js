import React, {Component} from 'react';
import UserService from "../../service/UserService";
import '../App/App.css';
import './Login.css';

class Logout extends Component {

    onLogout = () => {
        let message = '';
        try {
            UserService.setLoggedInUser(null);
            message = 'User is logged out!';
        } catch (e) {
            message = 'User can not log out';
        }
        return message;
    };

    render() {
        return (
            <div className={''}>
                <div className={'row m-2 mt-4'}>
                    <div className={'col-sm-12 d-flex justify-content-center'}>
                        <h3>
                            {this.onLogout()}
                        </h3>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }

}


export default Logout;