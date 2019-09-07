import React from 'react';

export const Icon = (props) => {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.handleClick(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}