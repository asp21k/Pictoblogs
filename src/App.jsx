import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import MCard from "./components/mCard";
import Article from "./components/Article";
function App() {
  const [sampleDataArray, setSampleDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setSampleDataArray(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(sampleDataArray[0]);

  return (
    <>
      <Navbar />
      <Home />
      {sampleDataArray.map((item, index) => (
        <MCard
          key={index} // Added key prop for each mapped item
          imageUrl={item.image.url}
          title={item.title}
          tags={item.tags}
          content={item.content}
          author={item.author.join(", ")}
          date={item.date}
          commentcount={item.commentcount}
          likecount={item.likecount}
        />
      ))}
      {sampleDataArray.map((item, index) => (
        console.log(item),
        <Article

          key={index} // Added key prop for each mapped item
          imageUrl={item.image.url}
          title={item.title}
          tags={item.tags}
          content={item.content}
          author={item.author}
          date={item.date}
          commentcount={item.commentcount}
          likecount={item.likecount}
        />
      ))}
    </>
  );
}

export default App;
