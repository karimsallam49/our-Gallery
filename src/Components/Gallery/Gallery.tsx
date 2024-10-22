// src/components/ImageGallery.tsx
import  { useState } from 'react';
import GridList from "../GridList/GridList";
import Lightbox from '../Lightbox/Lightbox';
import { galleryindex } from '../../Shared/Index';



const Gallery= () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <GridList images={galleryindex} onImageClick={openLightbox} />
      {lightboxOpen && (
        <Lightbox
          images={galleryindex}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={() => setCurrentIndex((currentIndex + 1) % galleryindex.length)}
          onPrev={() => setCurrentIndex((currentIndex - 1 + galleryindex.length) % galleryindex.length)}
          
        />
      )}
    </div>
  );
};

export default Gallery;
