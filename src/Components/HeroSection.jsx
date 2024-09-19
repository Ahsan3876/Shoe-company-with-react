import React from "react";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="bg-[url('./images/hero-image.png')] bg-cover md:bg-contain bg-no-repeat bg-right pt-36 section-container "
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-[64px] md:leading-[92px]">
            THE <br />
            SHOE <br />
            COMPANY
          </h1>
          <div>
            <img
              className="w-full max-w-2xl"
              src="./images/the-white-shoe-hero-image 1 (1).png"
              alt="white shoe image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
