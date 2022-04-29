import React from "react";
import UserInput from "./input-user";
import MyButton from "./button";
import NavBar from "./navbar";

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <br></br>
                <br></br>
                <UserInput />
            </div>
        );
    }
}

export default LoginPage;