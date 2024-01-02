import React, { useState, useEffect } from "react";

const Temp = () => {
  const [sampleDataArray, setSampleDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setSampleDataArray(data); // Directly set the array
        console.log(response);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(sampleDataArray);
  

  return (
    <div>
      <h1>Sample Data:</h1>
      <ul>
        {sampleDataArray.map((post) => (
          <li key={post._id}>
            <p>Title: {post.title}</p>
            <p>Author: {post.author.join(", ")}</p>
            <img src={post.image.url} alt={post.title} />
            {/* Add other fields as needed */}
            <p>Tags: {post.tags.join(", ")}</p>
            <p>Content: {post.content}</p>
            <p>Date: {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Temp;
