"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
  interval?: number;
}

export function ImageCarousel({ images, interval = 4000 }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, interval, total]);

  return (
    <div className="px-4 md:px-8 lg:px-12"> {/* ✅ Added spacing wrapper */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img.src}
                alt={img.alt || `Slide ${index + 1}`}
                className="w-full h-64 object-cover md:h-96"
              />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-primary" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
