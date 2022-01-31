
import { jsx, Container, Box, Flex } from 'theme-ui';
/** @jsx jsx */
import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import Lottie from 'react-lottie-player'
import lottieJson from '../assets/lottie/hero.json';
const TestimonialNextArrow = ({ className, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex="0"
  >
    <svg fill="none" viewBox="0 0 26 20">
      <path
        fill="#fff"
        d="M2 11.225a1.225 1.225 0 010-2.45v2.45zm23.052-2.091a1.225 1.225 0 010 1.732l-7.795 7.795a1.225 1.225 0 11-1.732-1.732L22.455 10l-6.93-6.929a1.225 1.225 0 011.732-1.732l7.795 7.795zM2 8.775h22.186v2.45H2v-2.45z"
      />
    </svg>
  </div>
)

TestimonialNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

const TestimonialPrevArrow = ({ className, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex="0"
  >
    <svg fill="none" viewBox="0 0 26 20">
      <path
        fill="#fff"
        d="M24.186 11.225a1.225 1.225 0 100-2.45v2.45zM1.134 9.134a1.225 1.225 0 000 1.732l7.795 7.795a1.225 1.225 0 101.732-1.732L3.732 10l6.93-6.929a1.225 1.225 0 10-1.733-1.732L1.134 9.134zm23.052-.359H2v2.45h22.186v-2.45z"
      />
    </svg>
  </div>
)

TestimonialPrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

const settingsTestimonial = {
  dots: true,
  infinite: true,
  speed: 1100,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  nextArrow: <TestimonialNextArrow />,
  prevArrow: <TestimonialPrevArrow />,
}
const HeroAnim = () => {

  return (
      
        <div sx={styles.heroanim} className='sm:top-0'>
        <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: "100%", height: "100%" }}
        />
        
         
        </div>
      
      
  )
}

export default HeroAnim;

const styles = {
    heroanim:{
        position: "absolute",
        top: "90px",
        left: "0",
        right: "0",
        width: "100%",
        height:"300px",
        pointerEvents: "none",
        backgroundColor:"transparent",
        
    },
    
}