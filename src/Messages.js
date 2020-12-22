import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Messages.css";

function Messages() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message_info">
                <h4>
                    testuser
                    <span className="message__timestamp">
                        this is a time stamp
                    </span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Messages
