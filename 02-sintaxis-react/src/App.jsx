import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'

export const App = () => {
  return (
    <>
      <NavBar/>
      <ExtensionCard/>
    </>
  )
}
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'

export const App = () => {
  return (
    <>
      <NavBar/>
      <div className="containerCards">
      <ExtensionCard
        cardTitle="Google Translate"
        cardImage="🆔"
        cardDescription="Aplicación para traducir página"
      />

      </div>
    </>
  )
}
