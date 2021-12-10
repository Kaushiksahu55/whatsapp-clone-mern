import React , {useState} from 'react'
import "./Chat.css"
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

const Chat = ({messages}) => {
    const [input , setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new" , {
          message: input,
          name: "Kaushik Sahu",
          timestamp: "Just now",
          received: false
        });

        setInput("");
    }
    return (
        <div className="chat">
          <div className="chat__header">
              <Avatar />
              <div className="chat__headerInfo">
                  <h3>Room Name</h3>
                  <p>Last seen at...</p>
              </div>

              <div className="chat__headerRight">
                  <IconButton>
                   <SearchIcon />
                  </IconButton>
                  <IconButton>
                   <AttachFileIcon />
                  </IconButton>
                  <IconButton>
                   <MoreVertIcon />
                  </IconButton>
              </div>
          </div>

          <div className="chat__body">
              {messages.map((message) => (
                  <p className={`chat__message ${message.received && "chat__receiver"}`}>
                  <span className="chat__name">{message.name}</span>
                  {message.message}
                  <span className="chat__timestamp">
                      {message.timestamp}
                  </span>
               </p>  
              ))}
            

            {/* <p className=" chat__message , chat__receiver">
               <span className="chat__name">Kaushik</span>
               This is a message
               <span className="chat__timestamp">
                   {new Date().toUTCString()}
               </span>
            </p>

            <p className="chat__message">
               <span className="chat__name">Kaushik</span>
               This is a message
               <span className="chat__timestamp">
                   {new Date().toUTCString()}
               </span>
            </p>    */}
          </div>

          <div className="chat__footer">
              <IconButton>
               <MoodIcon />
              </IconButton>
            <form>
                <input
                value = {input} onChange= {e => setInput(e.target.value)}
                 placeholder="Type a message"
                 type="text"
                />
                <button onClick={sendMessage} type="submit">Sent a message</button>
            </form>
            <IconButton>
              <MicIcon />
            </IconButton>
          </div>
        </div>
    )
}

export default Chat
