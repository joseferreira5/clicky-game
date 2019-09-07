import React from 'react';
import './style.css';

export const Icon = (props) => {
    return (
        <div className="icon-card">
            <div className="img-container" onClick={() => props.handleClick(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}