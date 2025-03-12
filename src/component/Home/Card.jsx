import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ReactSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const data = [
    {
        image:'/src/assets/img/b-1.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
    },

    {
        image:'/src/assets/img/b-2.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
    },

    {
        image:'/src/assets/img/b-2.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
    },

    {
        image:'/src/assets/img/b-2.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
    },


    {
        image:'/src/assets/img/b-2.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
    },


    {
        image:'/src/assets/img/b-2.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
    },

  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Slider {...settings}>
        {data.map((item, index) => (
            <div key={index}>
                <img src={item.image} alt={item.title} />
                <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
                <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
                ))}
                </Slider>
            
    </div>
  );
}
