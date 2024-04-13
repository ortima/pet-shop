import Slider from 'react-slick'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    focusOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  function SampleNextArrow(props) {
    const { onClick } = props

    return (
      <CiCircleChevRight
        size={40}
        className="-right-10 top-[40%] absolute cursor-pointer text-orange-500 hover:text-orange-600 hover:scale-125"
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <CiCircleChevLeft
        size={40}
        className="-left-10 top-[40%] absolute cursor-pointer text-orange-500 hover:text-orange-600 hover:scale-125"
        onClick={onClick}
      />
    )
  }

  const slides = [
    {
      url: './hero_banner/1.jpg',
    },
    {
      url: './hero_banner/2.jpg',
    },
    {
      url: './hero_banner/3.jpg',
    },
    {
      url: './hero_banner/4.jpg',
    },
    {
      url: './hero_banner/5.png',
    },
  ]

  return (
    <section>
      <Slider {...settings} className="w-[1400px] mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[400px] rounded-lg overflow-hidden relative"
          >
            <img
              src={slide.url}
              alt="image"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Banner
