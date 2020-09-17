import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import styled from './Chat.module.css'
import MicIcon from '@material-ui/icons/Mic'


const Chat = ()=> {
  return (
    <div className={styled.chat}>
      <div className={styled.header}>
        <Avatar/>

        <div className={styled.headerInfo}>
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className={styled.headerRight}>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className={styled.body}>
        <p className={styled.message}>
          <span className={styled.name}>Ivan</span>
            This is a message
          <span className={styled.timestamp}>Timestamp</span>
        </p>

        <p className={styled.reciever}>
          <span className={styled.name}>Ivan</span>
            This is a message
          <span className={styled.timestamp}>Timestamp</span>
        </p>
      </div>

      <div className={styled.footer}>
        <div className={styled.icon}><InsertEmoticon /></div>
        <form>
          <input
          placeholder='Type a message'
          type='text' 
          />
          <button type='submit'>Send a message</button>
        </form>
        <div className={styled.icon}><MicIcon /></div>
      </div>
    </div>
  )
}

export default Chat
