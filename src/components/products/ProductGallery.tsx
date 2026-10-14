"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "/images/industrial-components.jpg");

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded bg-slate-900/80 backdrop-blur-md text-amber-400 border border-slate-700 text-xs font-bold uppercase tracking-wider">
            Illustrative Part
          </span>
        </div>
      </div>

      {/* Thumbnail Bar */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(img)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === img
                  ? "border-amber-500 ring-2 ring-amber-500/30"
                  : "border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} view ${idx + 1}`}
                fill
                className="object-cover object-center"
                sizes="150px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
