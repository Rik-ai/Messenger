import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from './Chat.module.css'
import MicIcon from '@material-ui/icons/Mic'
import axios from '../axios'


const Chat = ({messages})=> {

   const [input, setInput] = useState('')

  const sendMessage = async (e) =>{
    e.preventDefault()

    await axios.post('/messages/new', {
      message: input,
      name: "DEMO_APP",
      timestamp: "Just now",
      received: false
    })

    setInput('')
  }
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
        {messages.map((message) => (
          <p className={`${styled.message} ${message.received && styled.received}`}>
          <span className={styled.name}>{message.name}</span>
            {message.message}
          <span className={styled.timestamp}>{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className={styled.footer}>
        <div className={styled.icon}><InsertEmoticon /></div>
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Type a message'
            type='text' 
          />
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <div className={styled.icon}><MicIcon /></div>
      </div>
    </div>
  )
}

export default Chat
