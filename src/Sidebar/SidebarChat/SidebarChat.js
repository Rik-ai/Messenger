import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../../firebase'
import styled from './SidebarChat.module.css'

const SidebarChat = ({ id, name, addNewChat }) => {

    const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = ()=> {
    const roomName = prompt("Please enter name for chat room")
    if(roomName) {
        db.collection('rooms').add({
        name: roomName
      })
    }
  }

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
        <div className={styled.sidebarChat}>
          <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className={styled.info}>
              <h2>{name}</h2>
              {/* <p>This is the last message</p>*/}
            </div>
        </div>  
    </Link>
  ) : (
    <div
     onClick={createChat}
     className={styled.sidebarChat}
    >
      <h2> Add new Chat</h2>
    </div>
  )   
}


export default SidebarChat

