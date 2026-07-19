export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold">About Recipe Hub</h1>
      <p className="text-gray-400 mt-4 max-w-xl text-center">
        Recipe Hub is a place to discover simple, delicious recipes and share your own cooking creations with the world.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-2xl w-full">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-3xl">🍳</p>
          <p className="mt-2 font-semibold">Easy Recipes</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-3xl">📸</p>
          <p className="mt-2 font-semibold">Share Your Dishes</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-3xl">🔍</p>
          <p className="mt-2 font-semibold">Quick Search</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl w-full bg-gray-800 rounded-lg p-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400">3</p>
          <p className="text-sm text-gray-400 mt-1">Recipes</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400">55</p>
          <p className="text-sm text-gray-400 mt-1">Avg. Minutes</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-400">100%</p>
          <p className="text-sm text-gray-400 mt-1">Homemade</p>
        </div>
      </div>
    </div>
  );
}