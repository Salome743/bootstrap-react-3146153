import React from 'react'
import "./App.css"
import { navBar } from './components/navBar'
import { SectionCard } from './components/SectionCard.jsx'


export const App = () => {
  return (
    <>
      <div>
        <h1 className='title-metrika'>Metrika</h1>
        <img src="../assets/icons-redes.png" alt="" />
      </div>
      <SectionCard />

    </>
  )
}