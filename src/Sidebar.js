import './Sidebar.css'
import React from 'react'
import ExpandMore from '@material-ui/icons/ExpandMore'
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import AddIcon from '@material-ui/icons/Add';
import InfoOutLinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import SidebarChannel from './SidebarChannel';
import MicIcon from  '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__top">
            <h3>My Disord 🉑</h3>
            <ExpandMore/>
        </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelheader">
                    <div className="sidebar__header">
                        <ExpandMore/>
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon className= "sidebar__addchannel"/>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon fontSize = "large" className="sidebar__voiceIcon"/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutLinedIcon/>
                    <CallIcon/>
                </div>

            </div>

            <div className="sidebar__profile">
                <Avatar src="/images.jpg" className = "sidebar__avatar"/>
                <div className="sidebar__profileInfo">
                    <h3>@King Cozy</h3>
                    <p>thisismyID</p>
                    <div className="sidebar__profileIcons">
                        <MicIcon/>
                        <HeadsetIcon/>
                        <SettingIcon/>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Sidebar
