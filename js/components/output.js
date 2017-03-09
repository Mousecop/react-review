import React from 'react';

export default function Output(props) {
    return (
        <div className="convo">
            <p className="singleMessage">{props.message}</p>
            <p className= "roboMessage">{props.roboMessage}</p>
        </div>
    );
}