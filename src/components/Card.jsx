import React from "react";

const Card = ({
  imageUrl,
  title,
  tags,
  content,
  author,
  date,
  commentcount,
  likecount,
}) => {
  const parser = new DOMParser();
  const parsedContent = parser.parseFromString(content, "text/html");

  return (
    <div className="Card mt-4  hover:drop-shadow-xl  max-w-[45rem] ">
      <div className="relative flex max-w-[60rem] max-h-[40rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative overflow-hidden bg-transparent rounded-none shadow-none bg-clip-border">
          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover object-center shadow "
          />

          <div className="absolute bottom-0 flex items-end justify-between space-x-3 p-4 w-full h-48 bg-gradient-to-t from-black/90 to-black/1 ">
            <div className="flex flex-row items-center -space-x-3 bg-transparent">
              <p className="block text-xl font-semibold leading-snug text-white bg-transparent">
                {"Authors: " + author}
              </p>
            </div>
            <p className="bblock text-xl font-semibold leading-snug text-white">
              {date}
            </p>
          </div>
        </div>
        <div className="p-4">
          <h4 className="block text-2xl font-semibold leading-snug text-blue-gray-900">
            {title}
          </h4>
          <div className="flex items-center mt-2">
            <h5 className="block text-xl font-semibold leading-snug text-gray-400">
              Tags:
            </h5>
            <div className="flex items-center text-base -space-x-1 font-medium text-black">
              <ul className="flex -space-x-2">
                {tags.map((tag, index) => (
                  <li key={index} className="px-2 py-2 hover:text-orange-600">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="block mt-1 text-xl font-normal leading-relaxed text-gray-700">
            {parsedContent.body.innerText.slice(0, 100) + "..."}
          </p>
        </div>

        <div className="flex items-center justify-between font-Mont font-normal m-4 space-x-4">
          <button className="flex items-center focus:outline-none text-gray-700 hover:text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                
                d="M9 5l7 7-7 7"
              />
            </svg>
            Read More
          </button>
          <div className="flex flex-row justify-center items-center space-x-2">
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
        </div>
      </div>
    </div>
  );
};

export default Card;
