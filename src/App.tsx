import { useState } from 'react'
import NodalBlackLogo from './assets/nodal-black.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={NodalBlackLogo} alt="React Logo" />
        <h1 className="text-3xl font-bold underline">Welcome to Nodal</h1>
      </div>
    </>
  )
}

export default App
