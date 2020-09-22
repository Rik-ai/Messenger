import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from './Chat.module.css'
import MicIcon from '@material-ui/icons/Mic'
import axios from '../axios'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { useStateValue } from '../StateProvider'


const Chat = ({messages})=> {

   const [input, setInput] = useState('')
   const [seed, setSeed] = useState('')
   const {roomId} = useParams()
   const [roomName, setRoomName] = useState('')
   const [{user}, dispatch] = useStateValue()
   const date = new Date()
   


   useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))
    }
  }, [roomId])


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = async (e) =>{
    e.preventDefault()

    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timestamp: [date.getHours(),':', date.getMinutes(), '   ', date.getDay(), '.', date.getMonth(),'.', date.getFullYear()],
      received: true,
      rooms: roomName
    })

    setInput('')
  }

  return (
    <div className={styled.chat}>
      <div className={styled.header}>
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className={styled.headerInfo}>
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
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
      {messages.map((message) => {

if(roomName === message.rooms) {
  return(
    <p className={`${styled.message} ${message.name === user.displayName && styled.received}`}>
    <span className={styled.name}>{message.name}</span>
      {message.message}
    <span className={styled.timestamp}>{message.timestamp}</span>
    </p>
  )
} 
        
           
})}
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
          <button onClick={sendMessage} type='submit'/>
        </form>
        <div className={styled.icon}><MicIcon /></div>
      </div>
    </div>
  )
}

export default Chat
