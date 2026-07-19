import Link from "next/link";
import { recipes } from "@/lib/recipes";

export default async function RecipeDetail({ params }) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === Number(id));

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <Link href="/" className="text-blue-400 hover:underline self-start mb-4">
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-80 h-52 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-400 mt-1">⏱ {recipe.time}</p>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="mt-2 text-gray-300 list-disc list-inside">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Steps</h2>
      <ol className="mt-2 text-gray-300 list-decimal list-inside space-y-1">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}