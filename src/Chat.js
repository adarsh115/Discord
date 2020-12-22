import './Chat.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';

import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages';

function Chat() {
    return (
        <div className= "chat">
            <ChatHeader/>
            <div className="chat__messages">
                <Messages/>
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder={"message #test"}/>
                    <button className='chat__inputButton' type="submit">Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon  fontSize = 'large'/>
                    <GifIcon fontSize = 'large'/>
                    <EmojiEmotionsIcon fontSize = 'large'/>
                </div>
            </div>
        </div>

    )
}

export default Chat
