import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
// import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a PETS!!!" />

    </>
  )
}

export default App
