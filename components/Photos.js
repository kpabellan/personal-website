import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";

export const Photos = () => {
  const images = [
    ["/images/1.jpg", "Yosemite National Park, CA"],
    ["/images/2.jpg", "Mammoth, CA"],
    ["/images/3.jpg", "Alabama Hills, CA"],
    ["/images/4.jpg", "Yosemite National Park, CA"],
    ["/images/5.jpg", "Yosemite National Park, CA"],
    ["/images/6.jpg", "Yosemite National Park, CA"],
    ["/images/7.jpg", "Montaña de Oro, CA"],
    ["/images/8.jpg", "Philippines"],
    ["/images/9.jpg", "Philippines"],
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="pb-10">
      <div className="pb-5">
        <h1 className="text-left pb-5 text-2xl md:text-3xl lg:text-5xl">
          Photos 📸
        </h1>
        <p className="mx-auto text-left text-xl">
          Here are some of my favorite photographs that I have captured.
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10] overflow-hidden rounded-xl shadow-xl">
        <BsArrowLeftCircleFill
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white drop-shadow-md"
          onClick={prevSlide}
        />

        <div className="relative w-full h-full">
          {images.map(([src], index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              fill
              priority
              className={`absolute rounded-xl object-cover transition-opacity duration-1000 ease-in-out ${
                slide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <BsArrowRightCircleFill
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white drop-shadow-md"
          onClick={nextSlide}
        />
      </div>

      <p className="mx-auto pt-2 text-left text-md">
        📍 {images[slide][1]}
      </p>
    </div>
  );
};
