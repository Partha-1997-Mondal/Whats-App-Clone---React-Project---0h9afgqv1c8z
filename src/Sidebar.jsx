import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import { MoreVert } from "@material-ui/icons";
import  SidebarChat  from './SidebarChat'
import { useEffect, useState } from "react";
import db from "./firebase.js"


function Sidebar() {
const [rooms, setRooms] = useState([]);
useEffect(() => {
  db.collection('rooms').onSnapshot(snapshot => {
    setRooms(snapshot.docs.map(doc => 
      ({
        id: doc.id,
        data: doc.data(),

      })
      ))
  });
}, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat addNewChat />
      
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}

        

      </div>
    </div>
  );
}

export default Sidebar;
