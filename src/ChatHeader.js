import React from 'react'
import "./ChatHeader.css"
import NotificationIcon from "@material-ui/icons/Notifications"
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader() {
    return (
        <div className="chatHeader">
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">
                    #
                </span>
                Tst chanel name
            </h3>
        </div>
        <div className="chatHeader__right">
            <NotificationIcon/>
            <EditLocationRoundedIcon/>
            <PeopleAltRoundedIcon/>

            <div className="chatHeader__search">
                <input placeholder="Search"/>
                <SearchRoundedIcon/>
            </div>
                <SearchRoundedIcon/>
                <HelpRoundedIcon/>
        </div>
            
        </div>
    )
}

export default ChatHeader
