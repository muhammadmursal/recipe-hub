"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Recipe Hub</h1>
      <p className="text-gray-400 mt-2">Discover delicious recipes made simple</p>

      <h2 className="text-2xl font-semibold mt-8">All Recipes</h2>

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 w-64"
      />

      {filteredRecipes.length === 0 && (
        <p className="text-gray-500 mt-6">No recipes found matching "{searchTerm}"</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-64 h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{recipe.title}</h3>
            <p className="text-gray-400 text-sm mt-1">⏱ {recipe.time}</p>

            <Link
              href={`/recipe/${recipe.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md mt-3 w-full block text-center"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}