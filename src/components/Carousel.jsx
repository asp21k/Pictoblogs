import React from "react";

const Carousel = ({ sampleData }) => {
  // Destructure the required fields from sampleData
  const { image, title, author } = sampleData;

  return (
    <div className="Carousel">
      <div className="relative grid h-[40rem] mt-5 w-full items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {title}
          </h2>
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {author.join(", ")}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
