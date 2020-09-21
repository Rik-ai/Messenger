import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from './SidebarChat.module.css'

const SidebarChat = () => {

    const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  return (
    <div className={styled.sidebarChat}>
      <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className={styled.info}>
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>  
  )   
}


export default SidebarChat

