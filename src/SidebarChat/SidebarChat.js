import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from './SidebarChat.module.css'

const SidebarChat = () => {
  return (
    <div className={styled.sidebarChat}>
      <Avatar/>
      <div className={styled.info}>
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>  
  )   
}


export default SidebarChat

