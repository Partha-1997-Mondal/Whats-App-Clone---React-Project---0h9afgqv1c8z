import { Avatar, IconButton } from '@material-ui/core'
import { useEffect, useState } from 'react';
import React from 'react'
import './Chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Mic } from '@material-ui/icons';
import { useParams } from 'react-router-dom';



function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [ roomName, setRoomName ] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
            (snapshot.data().name));
        }
    }, [roomId]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);
    
const sendMessage = (event) => {
    event.preventDefault();
    console.log("You type >>>>", input);

    setInput("");
};



  return (
    <div className='chat'>
        <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat_headerInfo'>
            <h3>{roomName}</h3>
            <p>Last Sceen at ...</p>
        </div>
        <div className='chat_headerRight'>
        <IconButton>
            <SearchOutlined />
        </IconButton>
        <IconButton>
            <AttachFile />
        </IconButton>
        <IconButton>
            <MoreVert />
        </IconButton>
        </div>
        </div>
        <div className='chat_body'>
            <p className={'chat_message ${true && "chat_reciever"}'}>
                <span className='chat_name'>Partha Mondal</span>
                hey guys
                <span className='chat_timestap'>3.52 am</span>
                </p>
        </div>
        <div className='chat_footer'>
            <InsertEmoticon />
            <form>
                <input type="text" placeholder='Type a message..' value={input} onChange={event => setInput(event.target.value)}/>
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <Mic />
            
        </div>
      
    </div>
  )
}
export default Chat