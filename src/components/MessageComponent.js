import React, { forwardRef } from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

import '../css/MessageComponent.css';

const MessageComponent = forwardRef((props, ref) => {
    {
        return (
            <div ref={ref} className={(props.username===props.data.name)?"message message__user":"message"}>
                <Card className={(props.username===props.data.name)?"message__userCard":"message__guestCard"}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        {props.data.name} : {props.data.message}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
});

export default MessageComponent;