import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import { MoreVert } from "@material-ui/icons";
import  SidebarChat  from './SidebarChat'
function Sidebar() {
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

        

      </div>
    </div>
  );
}

export default Sidebar;
