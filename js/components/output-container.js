import React from 'react';
import Input from './input';
import uuid from 'uuid';
import faker from 'faker';
import Output from './output';

/* Chat bubbles and icons */
import FaCommentO from 'react-icons/lib/fa/comments-o';


export default class OutputContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            convoLog: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        this.setState({
            text: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault()
        const form = document.getElementById('formReset');
        form.reset();
        const newConvo = {
            id: uuid.v4(),
            message: this.state.text,
            roboMessage: faker.hacker.phrase()
        };
        const newLog = [...this.state.convoLog, newConvo]
        this.setState({
            convoLog: newLog,
            text: ""
        });
        if(this.state.text === "") {
            alert("Not Very Chatty");
        }
    }
 
    render() {
         const convoMap = this.state.convoLog.map(item => {
           return <Output message={item.message} roboMessage={item.roboMessage}/>
        });
        return (
            <div className="outputArea">
                <h1 className="Chatty Cathy">Talk to Chatty Cathy</h1>
                {convoMap}          
                <Input onSubmit={this.onSubmit} onChange={this.onChange}/>
            </div>
        );
    }
}