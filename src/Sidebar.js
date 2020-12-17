import './Sidebar.css'
import React from 'react'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__top">
            <h3>My Disord 🉑</h3>
            <ExpandMore/>
        </div>
        <div className="sidebar__channels">
            <div className="sidebar__channelheader">
                <div className="sidebar_header">
                    <ExpandMore/>
                    <h4>Text Channel</h4>
                </div>
                <AddIcon className= "sidebar__addchannel"/>
            </div>
        </div>
        <div className="sidebar__channelsList">
            <SidebarChannel/>
        </div>
        
        </div>
    )
}

export default Sidebar
