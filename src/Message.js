import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Typography variant="overline" display="block">
                {!isUser && `${message.username || 'Unknown User'}`}
            </Typography>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography variant="body1">
                        {message.messages}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
    )
})

export default Message
