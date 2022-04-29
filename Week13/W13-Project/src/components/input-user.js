import React from "react";
import MyButton from "./button";

class UserInput extends React.Component {
    render () {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Login Info</h3>
                        <div>
                            <input type='text' placeholder="Username"></input>
                            <br></br>
                            <br></br>
                            <input type='text' placeholder="Password"></input>
                            <br></br>
                            <br></br>
                            <MyButton />
                        </div>
                </div>
            </div>
        );
    }
}

export default UserInput;