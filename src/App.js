import React from 'react'
import styled from './App.module.css'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

function App() {
  return (
    <div className={styled.app}>
      <div className={styled.body}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
