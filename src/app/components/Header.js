import React from "react";

//Stateless components, Does not have a state, it benefits in performance, its a good practice
export const Header = (props) => {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                        <li><a href="#">User</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}