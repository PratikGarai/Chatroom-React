import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {FormControl, Button, InputLabel, Input, FormHelperText} from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
    buttonText : {
        marginRight : "5px",
    }
});

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
            message : this.state.val
        };
        this.props.addMessage(newMessage);

        this.setState({
            name : this.props.name,
            val : ""
        })
    }

    render()
    {
        // console.log(this.props);
        // console.log(this.state);
        const classes = this.props.classes;
        return(
            <div>
                <form>
                    {/* <FormControl>
                        <InputLabel htmlFor="my-input1">Name</InputLabel>
                        <Input id="my-input1" name="name" value={this.state.name} onChange={this.handleChange}  />
                        <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl> */}

                    <FormControl>
                        <InputLabel htmlFor="my-input2">Enter a message...</InputLabel>
                        <Input id="my-input2" name="val" value={this.state.val} onChange={this.handleChange} />
                        {/* <FormHelperText id="my-helper-text"></FormHelperText> */}
                    </FormControl>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={classes.button} 
                        onClick={this.handleSubmit} 
                        type="submit"
                        disabled={!this.props.name||!this.state.val||!this.props.addMessage}>
                            <span className={classes.buttonText}>Send</span>
                            <i className='bx bxs-send'></i>
                    </Button>

                </form>
            </div>
        );
    }
}

export default withStyles(styles)(InputForm);