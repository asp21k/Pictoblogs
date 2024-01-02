import { useState, useEffect } from "react";
import Card from "../components/Card";



const Home = () => {
  const [sampleDataArray, setSampleDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setSampleDataArray(data); // Directly set the array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    
    <div className="Home  w-4/5 mx-auto font-Mont font-extralight ">
      <div className="bg-slate-400  h-[1px] w-full my-5"></div>
      <div className="bg-white flex items-center justify-center h-56 w-full my-2">
        <h1 className="text-9xl font-semibold text-center ">PICT-O-BLOGS</h1>
      </div>
      <div className=" bg-slate-400 h-[1px] w-full my-5"></div>
      <div className="bodyy flex flex-row items-start justify-start">
        <div className="cards basis-3/5">
          <h1 className="text-4xl font-semibold text-center m-5">Recent Posts</h1>
          {sampleDataArray.map((data, index) => (
            <Card
              key={index}
              imageUrl={data.image.url}
              title={data.title}
              tags={data.tags}
              content={data.content}
              author={data.author.join(", ")}
              date={data.date}
              commentcount={data.commentcount}
              likecount={data.likecount}
            />
          ))}
        </div>
        <div className="category basis-2/5 ">
          <div className="container w-3/5 mx-auto bg-black/20 ">
            <h1 className="text-4xl font-semibold text-center m-5">Category</h1>
            <h5 className="text-xl font-semibold text-center m-5">Category 1</h5>
            <h5 className="text-xl font-semibold text-center m-5">Category 2</h5>
            <h5 className="text-xl font-semibold text-center m-5">Category 3</h5>
            <h5 className="text-xl font-semibold text-center m-5">Category 4</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
