import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ReactSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
         link: 'DISCOVER NOW',
    },

    {
        image:'/src/assets/img/b-2.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
        link: 'DISCOVER NOW',
    },

    {
        image:'/src/assets/img/b-3.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
        link: 'DISCOVER NOW',
    },

    {
        image:'/src/assets/img/b-4.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
        link: 'DISCOVER NOW',
    },


    {
        image:'/src/assets/img/b-5.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
        link: 'DISCOVER NOW',
    },


    {
        image:'/src/assets/img/b-6.jpg',
        title:'Soft leather jackets',
        description:'Soft leather jackets are a must-have for any fashion-conscious individual.',
        link: 'DISCOVER NOW',
    },

  ];

  return (
    <div className=" w-[100vw] h-[55vw] mx-auto mt-8 bg-gray-200">
    <div className="container">
      <Slider {...settings}>
        {data.map((item, index) => (
            <div key={index} className="max-w-[25vw] ml-8">
                <img src={item.image} alt={item.title}  className="transition duration-300 ease-in-out hover:scale-110"/>
                <h2 className="text-2xl  mt-8">{item.title}</h2>
                <p className="text-gray-600 text-lg mt-5">{item.description}</p>
                {/* <a href="#" className="text-black mt-6">{item.link}</a> */}
                <p className="text-black text-lg mt-6 underline  hover:text-blue-300
    hover:duration-300 
    cursor-pointer">{item.link}</p>
                </div>
                ))}
                </Slider>
                </div>
    </div>
  );
}
