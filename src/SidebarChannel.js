import React from 'react'
import './SidebarChannel.css'

function SidebarChannel({ id, channel }) {
    return (
        <div className="sidebarChannel">
           <h4 className="siderbarChannel__h">
            <span className='sidebarChannel__hash'>#</span>Discord
           </h4>
        </div>
    )
}

export default SidebarChannel
