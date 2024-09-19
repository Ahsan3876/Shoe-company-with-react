import React from "react";

export default function TestimonialSection() {
  return (
    <>
      <section
        id="testimonials"
        className="section-container pt-8 bg-testimonial-section scroll-mt-20 mt-10"
      >
        <h2 className="text-3xl md:text-6xl font-bold text-center pt-8">
          What People are saying about THE SHOE COMPANY ?
        </h2>
        <div className="text-center flex flex-col items-center md:items-stretch gap-8 md:flex-row justify-between mt-16 max-w-5xl mx-auto pb-16">
          <div className="w-60">
            <img
              className="w-full mb-4"
              src="./images/Mask group.png"
              alt="testimonial"
            />
            <p>
              “Looking for shoes that are built just for you? THE SHOE COMPANY
              is the way to go. Love the design and build quality.”
            </p>
          </div>
          <div className="w-60">
            <img
              className="w-full mb-4"
              src="./images/Group 4 (1).png"
              alt="testimonial"
            />
            <p>
              “I love the shoes, the quality, and everyting. They are worth the
              investment!”
            </p>
          </div>
          <div className="w-60">
            <img
              className="w-full mb-4"
              src="./images/Group 5 (1).png"
              alt="testimonial"
            />
            <p>
              “They make the best and forever lasting shoes. Superb fit and
              confort is literally the next level. Much recommended!”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
