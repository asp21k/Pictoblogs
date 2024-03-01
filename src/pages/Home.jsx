const Home = () => {
  return (
    <div className="Home  mx-auto font-Mont font-extralight ">
      {/* <div className="bg-slate-400  h-[1px] w-full my-5"></div> */}
      <div className="relative bg-white h-[100vh] w-full my-2">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/landscape.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hidden md:block">
            {/* This div is displayed on larger screens */}
            {/* <img
              src="your-image.jpg"
              alt="Background Image"
              className="object-cover w-full h-full"
            /> */}
          </div>
        </div>
      </div>
      <div className=" bg-slate-400 h-[1px] w-full my-5"></div>
      <div className="bodyy flex flex-row items-start justify-start">
        <div className="cards basis-3/5">
          <h1 className="text-4xl font-semibold text-center m-5">
            Recent Posts
          </h1>
        </div>
        <div className="category basis-2/5 "></div>
      </div>
    </div>
  );
};

export default Home;
