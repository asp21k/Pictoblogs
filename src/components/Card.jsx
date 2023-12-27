const Card = () => {
    return (
      <div className="Card mt-2 ml-[1.5rem]">
        <div className="ml-[11rem] relative flex max-w-[60rem] max-h-[40rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="ui/ux review check"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="p-4">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              UI/UX Review Check
            </h4>
           <div className="flex items-center mt-2">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  Tags:
              </h5>
              <div className="flex flex-row items-center -space-x-1">
                  <ul className="flex items-center text-base justify-between -space-x-1 font-medium text-black">
                  <li className="px-2 py-2 hover:text-orange-600">#UI</li>
                  <li className="px-2 py-2 hover:text-orange-600">#UX</li> 
                  <li className="px-2 py-2 hover:text-orange-600">#Review</li>
                  </ul>
              </div>
          </div>
  
            <p className="block mt-1 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Because it&apos;s about motivating the doers. Because I&apos;m here
              to follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  yolo
              </h5>
            </div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              January 10
            </p>
            </div>    
         
            <div className="flex items-center justify-between m- space-x-4">
              <button className="flex items-center focus:outline-none text-gray-700 hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Read More
              </button>
              <button className="flex items-center focus:outline-none text-gray-700 hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 3a6 6 0 100 12 6 6 0 000-12z"
                  />
                </svg>
                Comment
              </button>
            </div>
          
        </div>
      </div>
    );
  };
  
  export default Card;
  