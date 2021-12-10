import React, { useEffect,useState } from 'react'
import "./Sidebar.css";
import SidebarChat from "./SidebarChat"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton, Input } from '@mui/material';
import db from "./firebase";

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);
    
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        ));
        
        return () => {
            unsubscribe();
        }
    },[]); 


    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src="https://scontent.flko7-2.fna.fbcdn.net/v/t39.30808-6/250167583_1522651871431505_9007354993292438955_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qMxce52fxUgAX9Kygoy&_nc_ht=scontent.flko7-2.fna&oh=539c1999d92a370038762330cc804fbf&oe=61A3C58E"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                     <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                     <ChatIcon/>
                    </IconButton>
                    <IconButton>
                     <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or Start new Chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => {
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                } )}
            </div>
        </div>
    )
}

export default Sidebar
