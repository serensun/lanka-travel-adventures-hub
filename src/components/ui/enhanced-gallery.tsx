import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface EnhancedGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const EnhancedGallery: React.FC<EnhancedGalleryProps> = ({ images, className = "" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const imagesPerView = 3;
  const totalSlides = Math.ceil(images.length / imagesPerView);

  const nextImages = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevImages = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const openDialog = (index: number) => {
    setSelectedImageIndex(index);
  };

  const nextDialogImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const prevDialogImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  const startIndex = currentImageIndex * imagesPerView;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerView);

  return (
    <div className={`relative ${className}`}>
      {/* Main carousel */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="flex gap-4">
          {visibleImages.map((image, index) => (
            <div
              key={startIndex + index}
              className="flex-1 aspect-[4/3] cursor-pointer group"
              onClick={() => openDialog(startIndex + index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        {totalSlides > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImages}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      )}

      {/* Dialog for enlarged view */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black/90">
          <div className="relative flex items-center justify-center h-full">
            {selectedImageIndex !== null && (
              <>
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Navigation arrows within the image dialog */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={prevDialogImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={nextDialogImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
                
                {/* Close button */}
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </DialogClose>
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnhancedGallery;