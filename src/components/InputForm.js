import React from 'react';

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
        return(
            <div>
                <form>
                    <input name="name" value={this.state.name} onChange={this.handleChange}  /><br />
                    <input name="val" value={this.state.val} onChange={this.handleChange}  />
                    <button onClick={this.handleSubmit} type="submit">Send!</button>
                </form>
            </div>
        );
    }
}

export default InputForm;