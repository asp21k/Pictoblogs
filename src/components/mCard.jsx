// MCard.jsx

import React from "react";

const MCard = ({
  imageUrl,
  title,
  tags,
  content,
  author,
  date,
  commentcount,
  likecount,
}) => {
  const colorVariants = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    yellow: "text-yellow-600 bg-yellow-100",
    pink: "text-pink-600 bg-pink-100",
    orange: "text-orange-600 bg-orange-100",
    purple: "text-purple-600 bg-purple-100",
    red: "text-red-600 bg-red-100",
    gray: "text-gray-600 bg-gray-100",
    indigo: "text-indigo-600 bg-indigo-100",
    teal: "text-teal-600 bg-teal-100",
    cyan: "text-cyan-600 bg-cyan-100",
    brown: "text-brown-600 bg-brown-100",
    lime: "text-lime-600 bg-lime-100",
    // Add more colors as needed
  };

  return (
    <div className="card w-full my-10">
      <div className="flex flex-row p-2 w-full justify-center">
        <div className="image w-2/5 rounded-lg ">
          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover object-center shadow aspect-video rounded-lg "
          />
        </div>
        <div className="content p-3 w-3/5">
          <h1 className="text-lg font-semibold leading-snug py-2 text-purple-700">
            {date}
          </h1>
          <h1 className="text-2xl font-semibold leading-snug text-black">
            {title}
          </h1>
          <p className="block mt-1 text-xl font-normal leading-relaxed text-gray-700">
            {content.slice(0, 100) + "..."}
          </p>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-base -space-x-1 font-medium text-black">
              <ul className="flex flex-row justify-center items-center  space-x-2">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className={`px-2 font-semibold py-2 rounded-lg ${
                      colorVariants[tag.color]
                    }`}
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          
          <div className="flex flex-row justify-start items-center space-x-2 mt-2">
            <button className="flex items-center focus:outline-none text-gray-700 hover:text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="rounded-full p-1 h-7 w-7 fill-red-500 text-gray-700 hover:text-orange-600"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
              {likecount}
            </button>
            <button className="flex items-center  focus:outline-none text-gray-700 hover:text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="rounded-full p-1 h-7 w-7 fill-current text-gray-700 hover:text-orange-600"
              >
                <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
              </svg>

              {commentcount}
            </button>
          </div>
          <button className="flex items-center ml-0 mt-2 focus:outline-none text-gray-700 hover:text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
            Read More
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default MCard;
