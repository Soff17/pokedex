import React from 'react';

export default function Card() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-yellow-400 to-red-500">
      <div className="bg-white p-7 rounded-3xl shadow-2xl w-1/3 m-5 transition duration-500 hover:scale-105">
        <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-t-3xl overflow-hidden relative shadow-inner">
          <img
            className="w-full h-full object-cover opacity-80 transition duration-300 hover:opacity-100"
            src="/img10.jpg"
            alt=""
          />
           <div className="absolute inset-0 flex justify-center items-center">
            <img
              className="h-3/4" 
              src="/gordito-r.png" 
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-5">
          <span className="text-sm text-gray-600">26 December 2019</span>
          <div className="text-2xl text-gray-900 font-bold">Lorem Ipsum Dolor</div>
          <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</p>
          <button className="mt-4 bg-gradient-to-br from-orange-400 to-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-500 transition duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
