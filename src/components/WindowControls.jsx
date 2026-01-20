import useWindowStore from '#store/Windows'
import React from 'react'

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore(); // Assuming target is the windowKey
  return (
    <div id='window-controls'>
      <div className='close' onClick={() => closeWindow(target)} />
      <div className='minimize' onClick={() => minimizeWindow(target)} />
      <div className='maximize' onClick={() => maximizeWindow(target)} />
    </div>
  )
}

export default WindowControls