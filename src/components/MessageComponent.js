import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

import '../css/MessageComponent.css';

class MessageComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className={(this.props.username===this.props.data.name)?"message message__user":"message"}>
                <Card className={(this.props.username===this.props.data.name)?"message__userCard":"message__guestCard"}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        {this.props.data.name} : {this.props.data.message}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default MessageComponent;