import React from 'react'
import { Navbar, Welcome, Dock } from '#components'
import { Finder, Resume, Safari, Terminal, Text } from '#windows';

import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
    </main>
  )
}

export default App