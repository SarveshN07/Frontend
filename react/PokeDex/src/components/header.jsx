import React from "react";

export function Header() {
  return (
    <div className="w-full h-16 bg-yellow-400  items-center px-6 flex justify-between">
      <div>
        <img
        className="h-10 object-contain "
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="Pokédex Logo"
      />
      </div>

      <div>
        <img
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
         alt="Pokéball"
         className="h-12 w-12 hover:scale-110 transition-transform"
/>
      </div>
      
    </div>
  );
}
