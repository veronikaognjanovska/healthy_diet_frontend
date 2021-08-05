import React from 'react';
import './Profile.css';
import UserService from "../../service/UserService";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.getLoggedInUser() || "No logged in user"
        }
    }

    render() {
        return (
            <div className={"row px-4 form-part-1 mx-auto"}>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h4>Profile</h4>
                </div>
                <div className={"col-12 d-flex justify-content-center mt-3 mb-3"}>
                    <h6 className={"text-center"}>{this.state.user}</h6>
                </div>
            </div>
        );
    };


}

export default Profile;