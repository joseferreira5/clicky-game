import React from 'react';
import './style.css';

export const Main = (props) => {
    return (
        <main className="main-container">{props.children}</main>
    );
}