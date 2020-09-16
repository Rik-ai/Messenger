import React from 'react'
import styled from './Sidebar.module.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

const Sidebar = ()=>{
    return(
        <div className={styled.sidebar}>
            <div className={styled.header}>
                <div className={styled.headerRight}>
                    <DonutLargeIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar