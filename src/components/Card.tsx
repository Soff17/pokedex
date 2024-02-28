import React from 'react';
import Button from './Button';
import fondoTextura from './assets/fondotextura.jpg';

interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

interface CardProps {
  image?: string;
  name?: string;
  height?:number;
  stats?: Stat[]; // Añade esto
  //description?: string;<
  onSearch: () => void; 
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  inputValue?: string; 
}

export default function Card({
  image,
  name,
  height,
  stats,
  //description,
  onSearch,
  onInputChange,
  inputValue
}: CardProps) {
  return (
    
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-yellow-400 to-red-500">  
      <div className="fixed top-0 right-0 mt-5 mr-5 flex items-center">
        <input
          onChange={onInputChange}
          value={inputValue || ''}
          className="shadow border-4 border-blue-500 rounded-l-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-yellow-300"
          type="text"
          placeholder="Ingrese número de Pokémon"
        />
        <Button
          label="Buscar"
          onClick={onSearch}
          imageUrl="./pokebola2.png" // Asegúrate de que esta ruta sea correcta
        />
      </div>
       
      <div className={`p-7 rounded-3xl shadow-2xl w-1/3 m-5 border-2 border-black transition duration-500 hover:scale-105`}>
      <div
        className="text-center mt-5 rounded-xl overflow-hidden border-4 border-black"
        style={{
          backgroundImage: "url('/dorado.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          height: '90px', // Ajusta esto según tus necesidades
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          //padding: '-20px' // Añadido para dar más espacio dentro del div
          marginBottom: '20px'
        }}
      >
        <h2
          className="text-4xl font-bold"
          style={{
            color: '#000000',
            WebkitTextStroke: '1px #333333',
            backgroundClip: 'text',
            //textFillColor: 'transparent', // Asegúrate de agregar esto si quieres el efecto de clip de fondo en el texto
            marginBottom: '10px' // Aumentado para bajar el texto un poco más
          }}
        >
          {name}
        </h2>
      </div>



      <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-t-3xl overflow-hidden relative shadow-inner">
          <img
            className="w-full h-full object-cover opacity-80 transition duration-300 hover:opacity-100"
            src="/img9.jpg" 
            alt=""
          />
        <div 
          className="absolute inset-0 flex justify-center items-center border border-gray-500"
          style={{
            borderWidth: '20px', // Grosor del borde
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Sombra del borde
            borderColor: '#CCE1DB' // Esto es un ejemplo de gris, puedes usar el color exacto que prefieras
          }}
        >
          <img
              className="h-3/4"
              src={image}
              alt="Principal avatar"
            />
        </div>
      </div>
        
      <div
        className="grid grid-cols-1 gap-1 rounded-xl overflow-hidden border border-gray-500"
        style={{
          backgroundImage: "url('/azul2.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '250px', // Ajusta esto según tus necesidades
          marginTop: '26px', // Aumentado para bajar el texto un poco más
          borderWidth: '2px', // Grosor del borde
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Sombra del borde
          borderColor: '#FFF300', // 

          
        }}
      >
        <div>   
        {stats?.map((stat) => (
          <div className="stat">
              <div className="stat-title text-white text-left">{stat.stat.name}</div>
              <div className="h-2 w-full">
                  <div className="h-2 bg-orange-500 rounded-full" style={{ width: `${stat.base_stat}%`}}></div>
              </div>
          </div>
        ))}
        </div>
      </div>
        
    </div>
    </div>
    
  );
}


