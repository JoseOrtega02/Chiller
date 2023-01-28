import React from 'react'
import "./hero.scss"
import img from "../../assets/img.jpeg"
function Hero() {
  return (
    <div className="hero__container">
        <img src={img} alt="" />
        <div className="hero__buttons">
            <button>Watch</button>
            <span><i class="fa-regular fa-star"></i></span>
        </div>
    </div>
  )
}

export default Hero