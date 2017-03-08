import React from 'react';

export default function Output(props) {
    console.log(props.convoMap);
    return (
        <div className="output">
            {props.convoMap}
        </div>
    )
}