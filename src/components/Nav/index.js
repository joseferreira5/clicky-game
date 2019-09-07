import React from 'react';


export const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">Clicky Game</a>
                <ul className="nav text-white d-flex p-2 justify-content-between">
                    <li className="nav-item d-flex p-2">
                        <p>{props.message}</p>
                    </li>
                    <li className="nav-item d-flex p-2">
                        <p>Score: {props.score} | Top Score: {props.topScore}</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
}