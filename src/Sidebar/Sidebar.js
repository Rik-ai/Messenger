import React, { useEffect, useState } from 'react'
import styled from './Sidebar.module.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Avatar } from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from '../Sidebar/SidebarChat/SidebarChat'
import db from '../firebase'
import { useStateValue } from '../StateProvider'



const Sidebar = ()=>{
  
  const [rooms, setRooms] = useState([])
  const [{user}, dispatch] = useStateValue()
  

  useEffect(()=>{
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => 
        ({
          id: doc.id,
          data: doc.data()
        })
        ))
    ))
    return () => {
      unsubscribe()
    }
  }, [])

  return(
    <div className={styled.sidebar}>
      <div className={styled.header}>
        <Avatar src={user?.photoURL}/>
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
        <SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat
            key={room.id} 
            id={room.id} 
            name={room.data.name} 
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar