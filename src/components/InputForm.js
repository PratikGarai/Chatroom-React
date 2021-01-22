import React from 'react';

class InputForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            val : "hello",
            name : "Pratik"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    render()
    {
        // console.log(this.props);
        return(
            <div>
                <form>
                    <input name="name" value={this.state.name} onChange={this.handleChange} /><br />
                    <input name="val" value={this.state.val} onChange={this.handleChange} />
                    <button type="submit">Send!</button>
                </form>
            </div>
        );
    }
}

export default InputForm;