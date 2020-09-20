import React, { useEffect, useState } from 'react'
import styled from './App.module.css'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'
import Pusher from 'pusher-js'
import axios from'./axios'

function App() {
  const [messages, setMessages] = useState([])

useEffect(() => {
  axios.get('/messages/sync')
    .then(response=>{
      setMessages(response.data)
    })
}, [])


  useEffect(() => {
    const pusher = new Pusher('2cff151ee712296fed25', {
      cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
  });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  
  return (
    <div className={styled.app}>
      <div className={styled.body}>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
