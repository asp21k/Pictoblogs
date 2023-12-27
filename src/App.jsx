import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Card
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        title="UI/UX Review Check"
        tags={["#UI", "#UX", "#Review"]}
        content="Because it's about motivating the doers. I'm here to follow my dreams and inspire others."
        author="yolo"
        date="January 10"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        title="UI/UX Review Check"
        tags={["#UI", "#UX", "#Review"]}
        content="Because it's about motivating the doers. I'm here to follow my dreams and inspire others."
        author="yolo"
        date="January 10"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        title="UI/UX Review Check"
        tags={["#UI", "#UX", "#Review"]}
        content="Because it's about motivating the doers. I'm here to follow my dreams and inspire others."
        author="yolo"
        date="January 10"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        title="UI/UX Review Check"
        tags={["#UI", "#UX", "#Review"]}
        content="Because it's about motivating the doers. I'm here to follow my dreams and inspire others."
        author="yolo"
        date="January 10"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        title="UI/UX Review Check"
        tags={["#UI", "#UX", "#Review"]}
        content="Because it's about motivating the doers. I'm here to follow my dreams and inspire others."
        author="yolo"
        date="January 10"
      />

      <p className="text-center text-purple-700 text-2xl"> Hi there! </p>
    </>
  );
}

export default App;
