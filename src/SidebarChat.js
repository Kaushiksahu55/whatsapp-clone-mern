import React from 'react';
import "./SidebarChat.css";
import {Avatar} from '@mui/material';
import db from './firebase';

const SidebarChat = ({id,name,addNewChat}) => {

    const createChat = () => {
        const roomName = prompt("Please Enter Name For New Chat Room");

        if(roomName) {
           db.collection("rooms").add({
               name: roomName
           })
        }
    };

    return !addNewChat ?(
        <div className="sidebarChat">
             <Avatar />
             <div className="sidebarChat__info">
                 <h2>{name}</h2>
                 <p>This is the last message</p>
             </div>
        </div>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
