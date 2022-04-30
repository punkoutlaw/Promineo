import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#"><h3>TradeWin</h3></a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">My List</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;