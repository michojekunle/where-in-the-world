import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './loading.css'

const Loading = () => {
    const { theme: { text } } = useContext(ThemeContext)
  return (
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
  )
}

export default Loading