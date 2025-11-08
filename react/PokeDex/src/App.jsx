import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero'
import PokemonCard from "./components/card";


function App() {
  const [pokemonList ,setPokemonList] = useState([]);
  const [searchTerm ,setSearchTerm] = useState("");

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=400");
      const data =  await response.json();

      const details = await Promise.all(
        data.results.map(async(p) =>{
          const res = await fetch(p.url);
          return await res.json();
        })
      )
      setPokemonList(details);
    }

    fetchData();
  },[])

   const filtered = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
  <>
    <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <div className="grid grid-cols-5 gap-6 p-10 bg-gray-100 min-h-screen">
      {filtered.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  </>
);
}

export default App
