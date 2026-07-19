"use client";

import { useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
    "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400",
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
    "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400",
  ]);
  function handleImageUpload(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImages([...images, imageUrl]);
  }

  function handleDelete(indexToRemove) {
    setImages(images.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold">My Creations</h1>
      <p className="text-gray-400 mt-2">Upload photos of dishes you've cooked</p>

      <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold mt-6">
        + Upload Image
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      </label>
      {images.length === 0 && (
  <p className="text-gray-500 mt-8">No images yet. Upload your first creation!</p>
)}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 max-w-4xl w-full">
        {images.map((imageUrl, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt="My creation"
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}