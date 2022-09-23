import React from 'react';
import MainVisual from './MainVisual';
import Advertisement from './Advertisement';
import '../css/Main.scss'

const Main = () => {
  return (
    <main className='Main'>
        <MainVisual/>
        <Advertisement/>
    </main>
  )
}

export default Main