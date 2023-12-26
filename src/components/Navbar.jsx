import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-14 bg-white text-black relative shadow-xl font-sans">
      <div
        className="text-2xl pl-8 font-bold uppercase bg-cover bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif)",
        }}
      >
        PICTOBLOGS
      </div>
      <div className="nav-wrapper px-4 flex justify-between">
        <ul className="flex items-center text-base justify-between font-medium text-black">
          <li className="px-4 py-2 hover:text-orange-600">HOME</li>
          <li className="px-4 py-2 hover:text-orange-600">CATEGORIES</li>
          <li className="px-4 py-2 hover:text-orange-600">ARCHIVE</li>
          <li className="px-4 py-2 hover:text-orange-600">TAGS</li>
          <li className="px-4 py-2 hover:text-orange-600">ABOUT US</li>
        </ul>
      </div>
      <div className="Search-bar p-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-500"
        />
        <button className=" absolute right-5 top-3">
          <svg viewBox="0 0 16 16" fill="currentColor" height="2em" width="2em" >
            <path
              fill="currentColor"
              d="M15.504 13.616l-3.79-3.223c-.392-.353-.811-.514-1.149-.499a6 6 0 10-.672.672c-.016.338.146.757.499 1.149l3.223 3.79c.552.613 1.453.665 2.003.115s.498-1.452-.115-2.003zM6 10a4 4 0 110-8 4 4 0 010 8z"
            />
          </svg>
        </button>
        {/* You can add a search button or other search-related elements here */}
      </div>
    </div>
  );
};

export default Navbar;
