import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from './App.module.css'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'
import Pusher from 'pusher-js'
import axios from'./axios'
import Login from './Login/Login'
import { useStateValue } from './StateProvider'

function App() {
  const [messages, setMessages] = useState([])
  const [{user}, dispatch] = useStateValue()


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
  
  return (
    <div className={styled.app}>
          {!user ? (
      <Login/>
    ):(
      <div className={styled.body}>
      <Router>
          <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat messages={messages}/>
              </Route>
              <Route path="/">{/* <Chat /> */}</Route>
            </Switch>
          </Router>
      </div>
    )}
    </div>
  )
}

export default App
