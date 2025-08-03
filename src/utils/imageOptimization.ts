// Image optimization utilities

export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  height?: number,
  quality: number = 80
): string => {
  // For external URLs, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, we could implement resizing here if needed
  // For now, return the original URL
  return src;
};

export const generateSrcSet = (src: string, sizes: number[]): string => {
  return sizes
    .map(size => `${getOptimizedImageUrl(src, size)} ${size}w`)
    .join(', ');
};

export const getImageDimensions = (src: string): Promise<{width: number, height: number}> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Common image sizes for responsive design
export const RESPONSIVE_SIZES = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  large: 1440,
} as const;