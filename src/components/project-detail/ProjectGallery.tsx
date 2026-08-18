import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Project, GalleryAsset } from '@/types/project';

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images: GalleryAsset[] = project.galleryImages || [
    { url: project.heroImage, caption: project.name, category: 'architecture' },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-sigma-stone-200/60">
      <div className="container-content">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-sigma-blue-600">Visual Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-sigma-graphite-900 mt-1">
            Project Gallery
          </h2>
          <p className="mt-2 text-sm md:text-base text-sigma-stone-600">
            Explore architectural elevations, living spaces, and environmental details.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative overflow-hidden rounded-2xl bg-sigma-stone-100 cursor-pointer border border-sigma-stone-200/60 ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-2 h-72 sm:h-[420px]' : 'h-60'
              }`}
            >
              <img
                src={img.url}
                alt={img.caption || project.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-sigma group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-semibold text-white flex items-center justify-between w-full">
                  <span>{img.caption || project.name}</span>
                  <Maximize2 className="h-4 w-4 text-sigma-amber-400" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))}
              className="absolute left-4 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative z-10"
            >
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].caption || project.name}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl"
              />
              {images[lightboxIndex].caption && (
                <p className="mt-4 text-sm text-white/90 font-medium">
                  {images[lightboxIndex].caption} ({lightboxIndex + 1} / {images.length})
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
