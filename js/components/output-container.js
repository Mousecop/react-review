import React from 'react';
import Input from './input';
import uuid from 'uuid';
import faker from 'faker';
import Output from './output';

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
    }
 
    render() {
        const roboStyle ={
            backgroundColor : '#3ea07f',
            width: '25%',
            borderRadius: '8px',
            display: 'block',
            padding: '8px'
        }
        const userStyle = {
            backgroundColor: '#b9b6b6',
            width: '25%',
            borderRadius: '8px',
            float: 'right',
            display: 'block',
            padding: '8px'
        }
         const convoMap = this.state.convoLog.map(item => {
           return (
               <div className="convo">
                    <p className="singleMessage" style={userStyle}>{item.message}</p>
                    <p className= "roboMessage" style={roboStyle}>{item.roboMessage}</p>
                </div>
            );
        });
        return (
            <div className="outputArea">
                {convoMap}
                <Input onSubmit={this.onSubmit} onChange={this.onChange}/>
            </div>
        );
    }
}