import React from 'react';
import Button from './Button';

interface CardProps{

  image?:string;
  title?:string;
  description?:string;
  
}



export default function Card(props:CardProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-yellow-400 to-red-500">
      <div className="bg-white p-7 rounded-3xl shadow-2xl w-1/3 m-5 transition duration-500 hover:scale-105">
        <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-t-3xl overflow-hidden relative shadow-inner">
          <img
            className="w-full h-full object-cover opacity-80 transition duration-300 hover:opacity-100"
            src="/img9.jpg"
            alt=""
          /> 
           <div className="absolute inset-0 flex justify-center items-center">
            <img
              className="h-2/4" 
              src={props.image} 
              alt="Principal_avatar"
            />
          </div>
        </div>

        
        <div className="text-center mt-5">
        <div
  className="text-2xl font-bold"
  style={{
    color: '#F3F604', // Color del texto amarillo
    WebkitTextStroke: '1.5px #0681FF' // Grosor y color del borde azul, específico de WebKit
  }}
>
{props.title}
</div>
<p className="text-gray-700 mt-2">{props.description}</p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
