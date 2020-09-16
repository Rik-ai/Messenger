import React from 'react'
import styled from './Sidebar.module.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Avatar } from '@material-ui/core';

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
        </div>
    )
}

export default Sidebar