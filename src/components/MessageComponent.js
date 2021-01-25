import React from 'react';

class MessageComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <React.Fragment>
                <div>
                    <p>
                        <strong>{this.props.data.name} sent :</strong><br />
                        <em>{this.props.data.val}</em>
                    </p>
                </div>
                <br/>
            </React.Fragment>
        )
    }
}

export default MessageComponent;