import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/slick.css";

/*Import images needed in the carousel*/
import ev_2 from '../assets/img/ev_2.jpg'
import ev_3 from '../assets/img/ev_3.jpg'
import ev_5 from '../assets/img/ev_5.jpg'
import ev_6 from '../assets/img/ev_6.jpg'
import ev_8 from '../assets/img/ev_8.jpg'



const Gallery =()=> {

  const images = [
    {src:ev_2,id:1},
    {src:ev_3,id:2},
    {src:ev_5,id:3},
    {src:ev_6,id:4},
    {src:ev_8,id:5}
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
            className:'center',
            centerMode:true,
            centerPadding: "160px",
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
