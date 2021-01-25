import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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
            name : ""
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
            name : this.state.name,
            val : this.state.val
        };
        this.props.componentRef.addMessage(newMessage);

        this.setState({
            name : "",
            val : ""
        })
    }

    render()
    {
        // console.log(this.props);
        const classes = this.props.classes;
        return(
            <div>
                <form>
                    <input name="name" value={this.state.name} onChange={this.handleChange}  /><br />

                    <input name="val" value={this.state.val} onChange={this.handleChange}  />

                    <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit} type="submit">
                        <span className={classes.buttonText}>Send</span>
                        <i className='bx bxs-send'></i>
                    </Button>
                    
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(InputForm);