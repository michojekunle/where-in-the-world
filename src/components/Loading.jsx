import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './loading.css'

const Loading = () => {
    const { theme: { text } } = useContext(ThemeContext)
  return (
    <>
      <div class="lds-grid">
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text }}></div>
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text}}></div>
          <div style={{backgroundColor: text}}></div>
      </div>
      <p style={{color: text, fontSize: '1.4rem', marginTop: "1.2rem",}}>Loading Please wait...</p>
    </>
  )
}

export default Loading