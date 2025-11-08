import React from "react";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h2 className="capitalize text-lg font-semibold mt-2">{pokemon.name}</h2>
      <p className="text-sm text-gray-500">#{pokemon.id}</p>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="text-xs px-2 py-1 rounded-full bg-gray-200 capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
