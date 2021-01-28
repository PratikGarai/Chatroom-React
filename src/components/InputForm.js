import React from 'react';
import {FormControl, Button, Input} from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';

import '../css/InputForm.css'; 

class InputForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            val : "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e)
    {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();

        if(this.state.val===""|| this.state.name==="")
            return;
        const newMessage = {
            name : this.props.name,
            message : this.state.val,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        };

        db
            .collection('messages')
            .add(newMessage);

        this.setState({
            name : this.props.name,
            val : ""
        })
    }

    render()
    {
        return(
            <div className="app__form">
                <form>

                    <FormControl className="app__formControl">
                        <Input className="app__input" placeholder="Enter a message..." id="my-input2" name="val" value={this.state.val} onChange={this.handleChange} />
                        <Button 
                            variant="text" 
                            color="primary" 
                            className="app__button__send" 
                            onClick={this.handleSubmit} 
                            type="submit"
                            disabled={!this.props.name||!this.state.val||!this.props.addMessage}>
                                <i className='sendIcon bx bxs-send'></i>
                        </Button>
                    </FormControl>

                </form>
            </div>
        );
    }
}

export default InputForm;