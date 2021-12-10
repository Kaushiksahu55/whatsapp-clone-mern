import React, {useEffect,useState} from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios'

// import {useEffect} from 'react'


const App = () => {
    
    const [messages,setMessages] = useState([]);
    useEffect (() => {
      axios.get('/messages/sync')
        .then(responce => {
           setMessages(responce.data);
        })
    },[])
  
  useEffect(() => {
    
    const pusher = new Pusher('15cefd744550d90f0d21', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);
  

  console.log(messages);


  return (
    <div className="app">
      <div className="app__body">
        {/*Side bar Component*/}
        <Sidebar />
      {/* Chat Component*/}
        <Chat messages = {messages} />
     </div>
      
    </div>
  )
}

export default App
