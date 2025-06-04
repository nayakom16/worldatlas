import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const HeroSection = () => {
  return (
    <main className='hero-section main' >
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque ab cum doloribus ratione quibusdam temporibus sunt consectetur, magni facere!
          </p>
          <button className="btn">
            Strat Exploring <FaLongArrowAltRight />
          </button>
        </div>

        <div className="hero-image">
          <img src="/world.png" alt="" className='banner-image' />
        </div>
      </div>
    </main>
  )
}

export default HeroSection
