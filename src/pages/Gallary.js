import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/slick.css";

/*Import images needed in the carousel*/
import ev_1 from '../assets/img/ev_1.jpg'
import ev_2 from '../assets/img/ev_2.jpg'
import ev_3 from '../assets/img/ev_3.jpg'
import ev_4 from '../assets/img/ev_4.jpg'
import ev_5 from '../assets/img/ev_5.jpg'
import ev_6 from '../assets/img/ev_6.jpg'
import ev_7 from '../assets/img/ev_7.jpg'
import ev_8 from '../assets/img/ev_8.jpg'



const Gallery =()=> {

  const images = [
    {src:ev_1,id:1},
    {src:ev_2,id:2},
    {src:ev_3,id:3},
    {src:ev_4,id:4},
    {src:ev_5,id:5},
    {src:ev_6,id:6},
    {src:ev_7,id:7},
    {src:ev_8,id:8}
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide:true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

  return (
    <div className = "slick-container">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id}>
            <img src={image.src} alt={image.src} />
          </div>
        ))}
      </Slider>
    </div>
  )
}


export default Gallery
