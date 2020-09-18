import React, { useEffect } from 'react'
import styled from './App.module.css'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
  const pusher = new Pusher('2cff151ee712296fed25', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data) => {
    alert(JSON.stringify(data));
  });
    
  }, [])
  
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
