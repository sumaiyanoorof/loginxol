import React from 'react'
import logoImg_1 from '../assets/logo1.png';
import logoImg_2 from '../assets/logo2.png';
import logoImg_3 from '../assets/logo3.png';
import logoImg_4 from '../assets/logo4.png';
import logoImg_5 from '../assets/logo5.png';
import logoImg_6 from '../assets/logo6.png';
import logoImg_7 from '../assets/logo7.png';
import logoImg_8 from '../assets/logo8.png';
import logoImg_9 from '../assets/logo9.png';
import logoImg_10 from '../assets/logo10.png';
import logoImg_11 from '../assets/logo11.png';
import logoImg_12 from '../assets/logo12.png';
import logoImg_13 from '../assets/logo13.png';
import logoImg_14 from '../assets/logo14.png';
import logoImg_15 from '../assets/logo15.png';
import logoImg_16 from '../assets/logo16.png';
import logoImg_17 from '../assets/logo17.png';
import logoImg_18 from '../assets/logo18.png';
import logoImg_19 from '../assets/logo19.png';
import logoImg_20 from '../assets/logo20.png';
import logoImg_21 from '../assets/logo21.png';
import logoImg_22 from '../assets/logo22.png';
import logoImg_23 from '../assets/logo23.png';
import logoImg_24 from '../assets/logo24.png';
import logoImg_25 from '../assets/logo25.png';
import logoImg_26 from '../assets/logo26.png';
import logoImg_27 from '../assets/logo27.png';
import logoImg_28 from '../assets/logo28.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Components/SectionTitle';



const logos = [ logoImg_1, logoImg_2, logoImg_3, logoImg_4, logoImg_5, logoImg_6,
  logoImg_7, logoImg_8, logoImg_9, logoImg_10, logoImg_11, logoImg_12, logoImg_13, logoImg_14, logoImg_15, logoImg_16, logoImg_17, logoImg_18,
  logoImg_19, logoImg_20, logoImg_21, logoImg_22, logoImg_23, logoImg_24,
  logoImg_25, logoImg_26, logoImg_27, logoImg_28
];

const Clientcarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  return (
    <div>
    <SectionTitle title="Our Clients" /> 
    <section className="py-28 mb-20 mt-10 bg-linear-to-r from-red-900 from-25% to-red-950  to-52%">
     <h3 className='font-serif font-semibold text-5xl -mt-14 text-white text-center mb-16'>
      Our Clients
     </h3>
      <div className="max-w-full  ">
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white/25  rounded-xl flex items-center justify-center h-32 shadow-md hover:scale-105 transform transition duration-200">
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="max-h-28 object-contain"
                />
              </div>
            </div>
            
          ))}
        </Slider>
      </div>
      <div className="max-w-full mt-14">
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white/25 rounded-xl flex items-center justify-center h-32 shadow-md hover:scale-105 transform transition duration-200">
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="max-h-28 object-contain"
                />
              </div>
            </div>
            
          ))}
        </Slider>
      </div>
    </section>
     </div>
  );
};

export default Clientcarousel;
