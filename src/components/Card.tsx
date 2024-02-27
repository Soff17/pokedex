import React from 'react';
import Button from './Button';

interface CardProps {
  image?: string;
  name?: string;
  //description?: string;
  onSearch: () => void; 
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  inputValue?: string; 
}

export default function Card({
  image,
  name,
  //description,
  onSearch,
  onInputChange,
  inputValue
}: CardProps) {
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
              src={image}
              alt="Principal avatar"
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <div
            className="text-2xl font-bold mb-4"
            style={{
              color: '#F3F604', 
              WebkitTextStroke: '1.5px #0681FF' 
            }}
          >
            {name}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="block rounded-lg bg-white p-6 shadow-lg">
              <p className="mb-4 text-base text-neutral-600">
                Altura: 0.5 metros
              </p>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white p-6 shadow-lg">
              <p className="mb-4 text-base text-neutral-600">
                Peso: 0.5 metros
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <input
            onChange={onInputChange}
            value={inputValue || ''}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            placeholder="Ingrese número de Pokémon"
          />
          <Button label="Buscar" color="green" onClick={onSearch} />
        </div>
      </div>
    </div>
  );
}


