import React from "react";

export default function Search({searchTerm , setSearchTerm}){
    return(
    <div className="flex justify-center">
        <input type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-80 px-4 py-2  text-black rounded-lg border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
            />
    </div>
    )
}