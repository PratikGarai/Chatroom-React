import React, { forwardRef } from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

import '../css/MessageComponent.css';

const MessageComponent = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={(props.username===props.data.name)?"message message__user":"message"}>
            {(props.username===props.data.name)?"":<span class="username">{props.data.name}</span> }
            <Card className={(props.username===props.data.name)?"message__userCard":"message__guestCard"}>
                <CardContent>
                    <Typography variant="body1" component="body1" className="message__text">
                    {props.data.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default MessageComponent;