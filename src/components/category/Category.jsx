// Importing required dependencies and styles
import React from "react";
import "./category.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from "../../assets/data/data"; // Assuming category data is imported from this path
import Slider from "react-slick";

// Custom arrow component for next navigation
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  );
}

// Custom arrow component for previous navigation
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  );
}

// React component for displaying a carousel of categories
export const Category = () => {
  // Configuration settings for the Slider component
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />, // Next arrow component
    prevArrow: <SamplePrevArrow />, // Previous arrow component
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {/* Section for displaying the category carousel */}
      <section className='category'>
        <div className='container'>
          {/* Using the Slider component with configured settings */}
          <Slider {...settings}>
            {/* Mapping over category data to generate individual category items */}
            {category.map((item) => (
              <div className='boxs' key={item.id}>
                <div className='box boxItems'>
                  <img src={item.cover} alt='' />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
