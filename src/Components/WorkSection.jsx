import React from "react";

export default function WorkSection() {
  return (
    <>
      <section
        id="how-it-works"
        className="section-container pt-20 scroll-mt-6 scroll-smooth"
      >
        <h2 className="text-center text-3xl font-bold max-w-md mx-auto mb-12">
          Have they finally made the perfect workout shoe?
        </h2>
        <div className="max-w-xl mx-auto pt-60 xl:pt-12 relative">
          <img
            className="w-full max-w-2xl rotate-6 p-8 media440:p-0 xl:rotate-0"
            src="./images/how-it-works-image 1 (1).png"
            alt="shoe"
          />
          <div className="max-w-[200px] xl:max-w-xs absolute top-0 xl:-translate-x-full">
            <h3 className="text-lg media560:text-2xl font-bold">THE HEEL</h3>
            <p className="text-xs media560:text-lg">
              The heel is well-built, has appropriate elevation and is not too
              rigid.
            </p>
            <img
              className="w-32 translate-y-8 xl:ml-auto rotate-45 xl:rotate-0"
              src="./images/arrow-1 1.png"
              alt="arrow-1"
            />
          </div>
          <div className="max-w-[200px] xl:max-w-xs absolute top-16 media560:top-0 right-0 xl:-right-60">
            <img
              className="w-32 media560:w-auto xl:-ml-32 translate-y-full media560:translate-y-60 rotate-[120deg] xl:translate-y-0 xl:rotate-0"
              src="./images/arrow-2 1.png"
              alt="arrow-2"
            />
            <h3 className="text-lg media560:text-2xl font-bold -mt-20">
              THE FRONT
            </h3>
            <p className="text-xs media560:text-lg">
              The front is comfortable and adjusts well to the shape of your
              foot.
            </p>
          </div>
          <div className="max-w-[200px] xl:max-w-xs absolute -bottom-16">
            <img
              className="ml-auto -mb-10 max-w-[150px]"
              src="./images/arrow-3 1.png"
              alt="arrow-3"
            />
            <h3 className="text-lg media560:text-2xl font-bold">TRACTION</h3>
            <p className="text-xs media560:text-lg">
              The shoe has good traction and doesn't slip easily.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
