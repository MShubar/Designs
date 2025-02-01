import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useState } from 'react'

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  return (
    <div>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((item, index) => (
        <img key={index} src={item.image} alt={item.name} className="image" />
      ))}
    </div>
  )
}

export default ImageSlider
