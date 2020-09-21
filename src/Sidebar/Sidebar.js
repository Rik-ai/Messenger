import React from 'react'
import styled from './Sidebar.module.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Avatar } from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from '../Sidebar/SidebarChat/SidebarChat'



const Sidebar = ()=>{
  return(
    <div className={styled.sidebar}>
      <div className={styled.header}>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGZTjKlvneVt9s8JxDmuaPy1YjmKTxT1FgAg&usqp=CAU'/>
        <div className={styled.headerRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className={styled.search}>
        <div className={styled.searchContainer}>
          <div className={styled.SvgIcon}>
            <SearchOutlined />
          </div>
          <input 
          placeholder='Search or start new chat' 
          type='text'
          />
        </div>
      </div>
      <div className={styled.chats}>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar