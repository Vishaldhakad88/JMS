import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../../redux/slices/photoSlice";

export default function PhotosGallery() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (loading) return <p className="text-center text-lg mt-4">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📸 Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((photo) => (
          <div
            key={photo.id}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all"
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full h-48 object-cover"
            />
            <p className="text-sm p-2 text-gray-700">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
