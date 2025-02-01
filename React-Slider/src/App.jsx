import './App.css'
import ImageSlider from './components/ImageSlider'
import { useState } from 'react'
import { SliderData } from './components/SliderData'

function App() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  )
}

export default App
