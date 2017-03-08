import React from 'react';
import Input from './input';
import uuid from 'uuid';


export default class Output extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            convoLog: [{
                id: uuid.v4(),
                message: ""
            }]
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
            message: this.state.text
        };
        const newLog = [...this.state.convoLog, newConvo]
        this.setState({
            convoLog: newLog
        });
    }
     


    render() {
        const convoMap = this.state.convoLog.map(item => {
           return <p className="singleMessage">{item.message}</p>;
        });
        return (
            <div className="outputArea">
                {convoMap}
                <Input onSubmit={this.onSubmit} onChange={this.onChange}/>
            </div>
        );
    }
}