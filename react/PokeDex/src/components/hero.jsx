import React from "react";
import Search from "./searchbar";

export default function Hero({searchTerm,setSearchTerm}){

    return(
        <section className="bg-linear-to-r from-red-500 via-red-600 to-red-700 text-white py-12 px-6 text-center shadow-lg">
        <h1 className="text-4xl  font-bold mb-4 tracking-wide">
        Explore the World of Pokémon
      </h1>
       <p className="text-lg mb-8 opacity-90">
        Search for your favorite Pokémon and view their details.
      </p>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        </section>
    )
}