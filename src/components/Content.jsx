import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      video: '/videos/FP1_Azerbaijan.mp4',
      title: 'FP1_Azerbaijan',
    },
    {
      video: '/videos/FP1_Qatar.mp4',
      title: 'FP1_Qatar',
    },
    {
      video: '/videos/FP1_US.mp4',
      title: 'FP1_US',
    },
    {
      video: '/videos/FP3.mp4',
      title: 'FP3',
    },
    {
      video: '/videos/Lando_Norris.mp4',
      title: 'Lando_Norris',
    },
  ];

  const VideoSlide = ({ video }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    return (
      <div className="px-2 relative"
      style={{
        backgroundImage: `url(src\assets\Landing_pg_bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="rounded-lg overflow-hidden bg-zinc-950">
          <div 
            className="relative aspect-video cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={video}
              
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950">
      <div className="w-[90%] mx-auto pt-10 relative">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        
        <div className="mt-20">
          <div>
            <Slider {...settings}>
              {data.map((item, index) => (
                <VideoSlide key={`row1-${index}`} video={item.video} />
              ))}
            </Slider>
          </div>
          
          <div className='mt-6'>
            <Slider {...settings}>
              {data.map((item, index) => (
                <VideoSlide key={`row2-${index}`} video={item.video} />
              ))}
            </Slider>
          </div>
          
          <div className='mt-6'>
            <Slider {...settings}>
              {data.map((item, index) => (
                <VideoSlide key={`row3-${index}`} video={item.video} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;