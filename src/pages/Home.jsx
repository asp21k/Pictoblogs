import  { useState, useEffect } from "react";

const DynamicCard = ({ bgImage, title, author, profilePic }) => {
  return (
    <div className="relative grid h-[40rem] mt-5 flex-col mx-auto w-4/5 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          {title}
        </h2>
        <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
          {author}
        </h5>
        <img
          alt={author}
          src={profilePic}
          className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const sampleDataArray = [
    {
      bgImage:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we design and code open-source projects?",
      author: "Tania Andrew",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we take photography as passion?",
      author: "ASp",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we travel the world on a budget?",
      author: "Riya Sharma",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we learn new languages fast and easy?",
      author: "Luis Gonzalez",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we cook delicious meals with simple ingredients?",
      author: "Emma Jones",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we create amazing art with digital tools?",
      author: "Jack Lee",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/358485/pexels-photo-358485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How we stay fit and healthy with simple exercises?",
      author: "Anna Smith",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
  ];

  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  const [currentSampleData, setCurrentSampleData] = useState(
    sampleDataArray[currentSampleIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSampleIndex(
        (prevIndex) => (prevIndex + 1) % sampleDataArray.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [sampleDataArray]);

  useEffect(() => {
    setCurrentSampleData(sampleDataArray[currentSampleIndex]);
  }, [currentSampleIndex, sampleDataArray]);

  return (
    <div className="Home mx-4">
      <DynamicCard {...currentSampleData} />
    </div>
  );
};

export default Home;
