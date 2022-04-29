import React from "react";
import UserInput from "./input-user";
import MyButton from "./button";
import NavBar from "./navbar";
import Footer from "./footer";

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <br></br>
                <br></br>
                <UserInput />
                <br></br>
                <br></br>
                <Footer />
            </div>
        );
    }
}

export default LoginPage;