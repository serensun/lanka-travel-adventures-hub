import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
}

interface EnhancedGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const EnhancedGallery: React.FC<EnhancedGalleryProps> = ({ images, className = '' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const visibleImages = 3;
  const maxStartIndex = Math.max(0, images.length - visibleImages);

  const nextImages = () => {
    setCurrentImageIndex(prev => Math.min(prev + 1, maxStartIndex));
  };

  const prevImages = () => {
    setCurrentImageIndex(prev => Math.max(prev - 1, 0));
  };

  const openDialog = (index: number) => {
    setSelectedImageIndex(currentImageIndex + index);
    setIsDialogOpen(true);
  };

  const nextDialogImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % images.length);
  };

  const prevDialogImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentImageIndex * (100 / visibleImages)}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-1/3 aspect-video cursor-pointer group"
                onClick={() => openDialog(index - currentImageIndex)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        {currentImageIndex > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
            onClick={prevImages}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        {currentImageIndex < maxStartIndex && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-10"
            onClick={nextImages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: maxStartIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Dialog for zoomed image */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <div className="relative">
            <img
              src={images[selectedImageIndex]?.src}
              alt={images[selectedImageIndex]?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Close button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              onClick={closeDialog}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation within dialog */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevDialogImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextDialogImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnhancedGallery;