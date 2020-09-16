import React from 'react'
import styled from './Sidebar.module.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';

const Sidebar = ()=>{
    return(
        <div className={styled.sidebar}>
            <div className={styled.header}>
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