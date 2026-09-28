import React, { useState, useEffect } from 'react';
import { PortfolioItem } from '../data/portfolio';

interface ProjectModalProps {
  project: PortfolioItem | null;
  lang: 'pl' | 'en';
  onClose: () => void;
  onQuoteThisProject: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onQuoteThisProject,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Reset indeksu przy otwarciu nowego projektu
  useEffect(() => {
    setSelectedPhotoIndex(0);
  }, [project]);

  // Obsługa klawisza Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Pobranie listy zdjęć z gwarancją poprawnego adresu
  const photos = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.img];

  const currentPhoto = photos[selectedPhotoIndex] || project.img;
  const title = lang === 'pl' ? project.title : project.titleEn;
  const category = lang === 'pl' ? project.category : project.categoryEn;
  const description = lang === 'pl' 
    ? project.description 
    : (project.descEn || project.description);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-[#0c0c0c] border border-white/10 text-white shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Przycisk zamknięcia */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all text-xl cursor-pointer"
          aria-label="Zamknij"
        >
          ✕
        </button>

        {/* Lewa strona: Duże zdjęcie + miniatury */}
        <div className="w-full lg:w-3/5 bg-black flex flex-col justify-between p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-neutral-950">
            <img
              src={currentPhoto}
              alt={`${title} - ujęcie ${selectedPhotoIndex + 1}`}
              className="w-full h-full object-contain transition-opacity duration-300"
              loading="eager"
            />
          </div>

          {/* Pasek miniatur */}
          {photos.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 pt-2">
              {photos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative w-20 h-14 md:w-24 md:h-16 flex-shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedPhotoIndex === idx 
                      ? 'border-[#c5a880] opacity-100 scale-95' 
                      : 'border-white/10 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img 
                    src={photo} 
                    alt={`Miniatura ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Prawa strona: Informacje techniczne i CTA */}
        <div className="w-full lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-mono">
                {category}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-[10px] tracking-widest text-neutral-400 font-mono">
                {project.location}
              </span>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight">
              {title}
            </h2>

            <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-white/10 text-xs">
              <div>
                <span className="text-neutral-500 uppercase tracking-widest block text-[9px] mb-1 font-mono">
                  {lang === 'pl' ? 'Lokalizacja' : 'Location'}
                </span>
                <span className="text-neutral-200">{project.location}</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-widest block text-[9px] mb-1 font-mono">
                  {lang === 'pl' ? 'Liczba ujęć' : 'Photos'}
                </span>
                <span className="text-neutral-200">{photos.length}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono mb-2">
                {lang === 'pl' ? 'O PROJEKCIE I ERGONOMII' : 'PROJECT OVERVIEW'}
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                {description}
              </p>
            </div>

            {project.materials && project.materials.length > 0 && (
              <div className="mb-6">
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono mb-3">
                  {lang === 'pl' ? 'UŻYTE MATERIAŁY I OKUCIA' : 'MATERIALS & HARDWARE'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] tracking-wider font-light"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 mt-auto">
            <button
              onClick={() => {
                onClose();
                onQuoteThisProject(title);
              }}
              className="w-full py-3.5 bg-white text-black hover:bg-[#c5a880] hover:text-white font-medium text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>{lang === 'pl' ? 'ZAPYTAJ O TĘ REALIZACJĘ' : 'INQUIRE ABOUT THIS PROJECT'}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;