import React from 'react'
import "./Header.css"
import { Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <Avatar fontSize="large" className="header__icon"/>
            </IconButton>
            <img className="header__logo" src="https://th.bing.com/th/id/OIP.R21N7vsa1foQvG8TXkU__QHaFG?pid=ImgDet&rs=1"  alt="tinder-logo" />
            <IconButton>
            <ChatIcon fontSize="large" className="header__icon"/>
            </IconButton>
            
        </div>
    )
}

export default Header
