import React from 'react'
import { Navbar, Welcome, Dock } from '#components'

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome/>
      <Dock/>
    </main>
  )
}

export default App