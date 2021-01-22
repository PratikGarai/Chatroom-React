import React from 'react';

class InputForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            val : this.props.initial
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        this.setState({val : e.target.value});
    }

    render()
    {
        // console.log(this.props);
        return(
            <div>
                <form>
                    <input value={this.state.val} onChange={this.handleChange} />
                    <button type="submit">Send!</button>
                </form>
            </div>
        );
    }
}

export default InputForm;