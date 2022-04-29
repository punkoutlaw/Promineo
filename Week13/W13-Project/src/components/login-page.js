import React from "react";
import UserInput from "./input-user";
import MyButton from "./button";
import NavBar from "./navbar";

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <UserInput />
            </div>
        );
    }
}

export default LoginPage;