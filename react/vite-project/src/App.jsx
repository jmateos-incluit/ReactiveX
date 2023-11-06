import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import { HubConnectionBuilder } from '@microsoft/signalr'

function App() {
  const [value, setValue] = useState('')
  const [connection, setConnection] = useState(null)
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5155/mesage')
      .withAutomaticReconnect()
      .build()

    setConnection(newConnection)
  }, [])

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then((result) => {
          console.log('Connected!')

          connection.on('sendMessage', (message) => {
            setValue(message)
          })
        })
        .catch((e) => console.log('Connection failed: ', e))
    }
  }, [connection])

  return (
    <>
      {value}
      <Component1></Component1>
      <Component2></Component2>
    </>
  )
}

export default App
