import React from 'react';

export default function Input (props) {
    return (
        <div className="inputField">
            <form className="form" onSubmit={props.onSubmit} id="formReset">
                <input className="input" type="text" placeholder="enter text here" onChange={props.onChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}