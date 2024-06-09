import React from 'react';
import Slider from 'react-slick';
import bannerImage1 from '../assets/images/banner1.jpg';
import bannerImage2 from '../assets/images/banner2.jpg';
import bannerImage3 from '../assets/images/banner3.jpg';
import '../App.css';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main>
      <h1>Добро пожаловать в наш интернет-магазин!</h1>
      <Slider {...settings} className="slider">
        <div>
          <img src={bannerImage1} alt="Баннер 1" className="banner" />
        </div>
        <div>
          <img src={bannerImage2} alt="Баннер 2" className="banner" />
        </div>
        <div>
          <img src={bannerImage3} alt="Баннер 3" className="banner" />
        </div>
      </Slider>
      <p>У нас вы найдете лучшие товары по доступным ценам.</p>
    </main>
  );
};

export default HomePage;
